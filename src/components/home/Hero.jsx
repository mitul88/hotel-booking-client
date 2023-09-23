import { Typography } from "@mui/material"
import CheckAvailabilityForm from "../shared/CheckAvailabilityForm"

const HeroSection = () => {
  return (
    <section className='grid place-content-center w-full h-[600px] p-5 bg-[url("/img/hero.jpg")] bg-cover bg-center saturate-100 hue-rotate-15' >
        <main className="mx-auto opacity-90 bg-blue-950 p-10 rounded-md">
          <Typography variant="h3" component="h2" className="text-white font-bold">Book Your Vacation With Us</Typography>
          <CheckAvailabilityForm />
        </main>
    </section>
  )
}

export default HeroSection