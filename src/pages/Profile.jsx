import UserInfo from "../components/profile/UserInfo"


const Profile = () => {
  return (
    <section className='max-w-[1180px] mx-auto bg-white p-3 text-gray-600 min-h-screen '>
        <h2 className="text-xl text-center p-10 font-bold">Shahed Rahman</h2>
        <UserInfo />
    </section>
  )
}

export default Profile