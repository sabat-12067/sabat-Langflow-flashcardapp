import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeroCarousel() {
  return (
    <Carousel className="py-14 space-y-6 lg:text-left w-[740px] mx-auto">
      <CarouselContent>
        <CarouselItem>
            <div className="">
              <img 
              className="border-s border-[1px] border-black rounded-md h-[400px]"
              src="/home.png"
              />
            </div>
            <p className="text-[12px] text-center">Make as many rooms as you want to study different topics, and each classroom can have multiple flashcard sets. </p>
        </CarouselItem> 
        <CarouselItem>
            <div className="">
              <img 
              className="border-s border-[1px] border-black rounded-md h-[400px]"
              src="/classrooms.png"
              />
            </div>
            <p className="text-[12px] text-center">Make as many rooms as you want to study different topics, and each classroom can have multiple flashcard sets. </p>
        </CarouselItem> 
        <CarouselItem>
            <div className="">
              <img 
              className="border-s border-[1px] border-black rounded-md h-[400px]"
              src="/set.png"
              />
            </div>
            <p className="text-[12px] text-center">Make as many rooms as you want to study different topics, and each classroom can have multiple flashcard sets. </p>
        </CarouselItem> 
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
  )
}
