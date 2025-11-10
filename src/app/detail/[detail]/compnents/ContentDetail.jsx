'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Pasarela from './Pasarela'
import { DetailLoader } from '@/app/components'
import Popup from './Popup'

const ContentDetail = ({ state }) => {
    const params = useParams();
    const id = params.detail;
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/v1/products/filter/${id}`);
            if (response.data.success) {
            setProduct(response.data.product);
            setImages(response.data.product.thumbnail);
            } else {
            console.log('Producto no encontrado');
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchData();
    }, [apiUrl, id]);

    return (
        <>
            {loading ? (
                <DetailLoader />
            ) : (
                <div className='detail-container'>
                <Pasarela images={images} />

                <main className='detail-container_main'>
                    <h1 className='detail-container_main_h1'>{product.name}</h1>
                    <p className='detail-container_main_p'>
                    <span className='detail-container_main_p_span'></span>
                    Este artículo es totalmente personalizable
                    </p>

                    {/* ...otros bloques... */}

                    <button
                    onClick={() => setShowPopup(true)}
                    className="consult-button"
                    >
                    CONSULTAR
                    </button>

                    {showPopup && (
                    <Popup
                        productName={product.name}
                        setShowPopup={setShowPopup}
                    />
                    )}
                </main>
                </div>
            )}
        </>
    );
};

export default ContentDetail;
