import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeroCarousel() {
  return (
    <Carousel className="py-10 space-y-6 lg:text-left h-[500px] w-[460px] mx-auto ">
      <CarouselContent>
        <CarouselItem>
            <h3>Classrooms</h3>
            <div className="">

            </div>
            <p>Make as many rooms as you want to study different topics, and each classroom can have multiple flashcard sets. </p>
        </CarouselItem> 
        <CarouselItem>
            <h3>Classrooms</h3>
            <div className="">

            </div>
            <p>Make as many rooms as you want to study different topics, and each classroom can have multiple flashcard sets. </p>
        </CarouselItem> 
        <CarouselItem>
            <h3>Classrooms</h3>
            <div className="">

            </div>
            <p>Make as many rooms as you want to study different topics, and each classroom can have multiple flashcard sets. </p>
        </CarouselItem> 
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
