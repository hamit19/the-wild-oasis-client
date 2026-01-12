"use client";

export default function Filter() {
  return (
    <div className='border flex border-primary-800'>
      <button className='hover:bg-primary-700 px-5 py-2 '>All cabins</button>
      <button className='hover:bg-primary-700 px-5 py-2 '>
        1&mdash;3 guests
      </button>
      <button className='hover:bg-primary-700 px-5 py-2 '>3&mdash;7</button>
      <button className='hover:bg-primary-700 px-5 py-2 '>8&mdash;12</button>
    </div>
  );
}
