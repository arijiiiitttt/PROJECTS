import React, { use, useMemo } from 'react'

const CinemaSeatBooking = ({
    layout = {
        rows: 8,
        seatPerRow: 12,
        aislePostion: 5,
    },
    seatTypes = {
        regular: { price: 100, color: 'bg-green-500' },
        vip: { price: 200, color: 'bg-blue-500' },
        premium: { price: 300, color: 'bg-pink-500' },
    },
    bookedSeats = ['A1', 'A2', 'B5', 'C7'],
    currency = '₹',
    onBookingComplete = () => { },



    tittle = 'Cinema Hall Booking',
    subtittle = 'Select your seats',
}) => {
    const initializeSeats = useMemo(() => {
        const seats = [];
      for( let row = 0; row < layout.rows; row++) { 
        const seatRow=[];
const seatType= getSeatType(row);
for(let seat =0 ; );
     }
    }, [layout, seatTypes, bookedSeats]);
    const [seats, setSeats] = useState(initializeSeats);
    return (
        <>
            <div className='w-full min-h-screen bg-gray-100'>
                <div className='max-w-6xl mx-auto text-center py-8 p-6'>
                    <h1 className='text-2xl font-bold mb-4'>{tittle}</h1>
                    <h2 className='text-xl mb-6'>{subtittle}</h2>
                </div>
                <div className='mb-8'>
                    <div className='w-full h-4 bg-gray-300 rounded-md mb-2 shadow-inner' />
                    <p className='text-center text-sm text-gray-800 font-medium'>SCREEN</p>
                </div>

                <div className='mb-6 overflow-x-auto'>
                    <div className='flex flex-col items-center min-w-max'>
                        {

                        }
                    </div>
                </div>
            </div>
        </>

    );
};

export default CinemaSeatBooking