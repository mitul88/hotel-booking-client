import { Button, Table, TableCell, TableHead, TableRow } from "@mui/material"

const Info = () => {
  return (
    <div className='w-full my-5 text-gray-600'>
        <div className="flex items-center">
            <h2 className="text-2xl text-gray-600 font-bold">Info & Price</h2>
        </div>
        <hr className="border boder-gray-600" />
        <div className="flex">
            <div className='w-full md:w-2/3 p-3'>
                <h4 className="text-lg text-gray-600 font-bold pt-3">Information</h4>
                <p className='text-gray-600 text-sm text-justify py-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi, nesciunt perspiciatis, temporibus aliquam deleniti quae omnis praesentium et tenetur tempore officia? Mollitia vel dolore necessitatibus, inventore aut ab sint voluptatibus iste laudantium ducimus expedita natus modi distinctio tempora similique nisi nostrum numquam minima quia! Laboriosam quam sapiente mollitia ea excepturi maxime dolorum nostrum ratione iusto vel dolorem ipsam est nisi provident, ut ducimus impedit magnam eaque, non eius eum! Cupiditate, nostrum harum saepe molestias modi quam nemo laborum! Sint? 
                </p>
            </div>
            <div className='w-full md:w-1/3 p-3'>
            <h4 className="text-lg text-gray-600 font-bold pt-3 text-center">Price</h4>
                <div className='flex flex-col mx-auto'>
                    <h4 className="text-center">5000/- BDT per night</h4>
                    <Button 
                        variant="contained"
                        className='text-white bg-red-500 hover:bg-red-600 hover:text-white w-32 mx-auto my-3'
                    >Book Now!</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info