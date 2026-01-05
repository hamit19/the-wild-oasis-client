import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className='grid items-center justify-center'>
      <Spinner />
      <div className=' text-xl text-gray-200'>
        <span>Loading cabins data...</span>
      </div>
    </div>
  );
}
