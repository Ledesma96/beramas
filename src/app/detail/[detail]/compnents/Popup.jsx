'use client'
import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const Popup = ({ productName, setShowPopup }) => {
    const message = encodeURIComponent(
        `Hola Beramassillones 😊 Quisiera información acerca de ${productName}`
    );

    const branches = [
        {
        id: 1,
        name: 'Berazategui',
        phone: '5491130180031',
        },
        {
        id: 2,
        name: 'La Plata',
        phone: '5492216174932',
        },
    ];

    return (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Hacé tu consulta en tu sucursal más cercana 🏪</h2>

            <div className="popup-buttons">
            {branches.map((branch) => (
                <Link
                key={branch.id}
                href={`https://api.whatsapp.com/send?phone=${branch.phone}&text=${message}`}
                target="_blank"
                className="wpp-button"
                >
                <FaWhatsapp size={20} />
                {branch.name}
                </Link>
            ))}
            </div>

            <button className="close-btn" onClick={() => setShowPopup(false)}>
            Cerrar
            </button>
        </div>
        </div>
    );
};

export default Popup;
