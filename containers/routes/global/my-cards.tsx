'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export function MyCards() {
  return (
    <div className="col-span-full flex flex-col gap-3 overflow-hidden lg:col-span-3">
      <p className="text-lg font-semibold">My Cards</p>
      <Swiper
        spaceBetween={10}
        centeredSlides={false}
        modules={[Autoplay]}
        loop
        className="w-full"
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.5,
          },
          720: {
            slidesPerView: 1.5,
          },
          1280: {
            slidesPerView: 2.5,
          },
        }}
      >
        <SwiperSlide>
          <Card type="blue" />
        </SwiperSlide>
        <SwiperSlide>
          <Card type="white" />
        </SwiperSlide>
        <SwiperSlide>
          <Card type="blue" />
        </SwiperSlide>
        <SwiperSlide>
          <Card type="white" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

interface ICardProps {
  type: 'blue' | 'white';
}

const Card = (props: ICardProps) => {
  const data = {
    balance: 5756,
    cardHolder: 'Hamid Shahsavani',
    validThru: '12/25',
    cardNumber: '1234 **** **** 3456',
  };

  return (
    <div
      className={cn(
        'flex w-full flex-col gap-4 rounded-[20px] border border-gray-200 pt-4',
        {
          'bg-gradient-to-bl from-[#4C49ED] to-[#0A06F4] text-white':
            props.type === 'blue',
          'bg-white': props.type === 'white',
        },
      )}
    >
      <div className="flex items-center justify-between px-5">
        <div>
          <p
            className={cn('text-xs', {
              'text-gray-200': props.type === 'blue',
              'text-gray-500': props.type === 'white'
            })}
          >
            Balance
          </p>
          <p className="text-xl">${data.balance.toLocaleString()}</p>
        </div>
        <Image
          src={
            props.type === 'blue'
              ? '/images/card-chip-white.png'
              : '/images/card-chip-gray.png'
          }
          alt="card chip"
          width={30}
          height={30}
        />
      </div>
      <div className="flex items-center justify-between px-5">
        <div>
          <p
            className={cn('text-xs', {
              'text-gray-200': props.type === 'blue',
              'text-gray-500': props.type === 'white'
            })}
          >
            CARD HOLDER
          </p>
          <p>{data.cardHolder}</p>
        </div>
        <div>
          <p
            className={cn('text-xs', {
              'text-gray-200': props.type === 'blue',
              'text-gray-500': props.type === 'white'
            })}
          >
            VALID THRU
          </p>
          <p>{data.validThru}</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white/10 px-5 py-2">
        <div>
          <p
            className={cn('text-xs', {
              'text-gray-200': props.type === 'blue',
              'text-gray-500': props.type === 'white'
            })}
          >
            CARD NUMBER
          </p>
          <p>{data.cardNumber}</p>
        </div>
        <Image
          src={
            props.type === 'blue'
              ? '/images/card-mastercard-white.png'
              : '/images/card-mastercard-gray.png'
          }
          alt="visa"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};
