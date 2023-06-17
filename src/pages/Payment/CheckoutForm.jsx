import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import { useContext, useEffect, useState } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {useNavigate, useParams} from 'react-router-dom';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../components/providers/AuthProvider";
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51NF9ebIzpYtwZBKLz4QjEBBnI0kF1r5Z9aMUYU63lGMbejCYA6Hbda37DJTcdlHRKpUNJ3BDkz07okU5vd3oNzuK00Iixq8CKR');



const Wrapper = (props) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm {...props} />
  </Elements>
);

const CheckoutForm = () => {
    const {id} = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [cls, setCls] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const fet = async()=>{
            const resp = await axios.get(`http://localhost:5000/class/${id}`);
            if(resp){
                setCls(resp.data);
                createIntent(resp.data.price || 0);
            }
        }

        if(!cls){
            fet();
        };

    }, []);

    const createIntent = async (price)=>{
        if (price > 0) {
            axios.post('http://localhost:5000/create-payment-intent', { price })
                .then(res => {
                    console.log(res);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }
    


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price: cls?.price,
                classId: cls?._id,
                userId: localStorage.getItem('userId'),
                date: new Date(),
            }
            axios.post('http://localhost:5000/payments', payment)
                .then(res => {
                    if (res.data.confirm) {
                        navigate('/dashboard/selectedclass');
                    }
                })
        }
    }

    return (
        <>
         <Helmet>
                <title>EliteYoga | Payments</title>
            </Helmet>

            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-4 btn-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 ml-8">{cardError}</p>
            }
            {transactionId && <p className="text-green-500">Transection complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default Wrapper;