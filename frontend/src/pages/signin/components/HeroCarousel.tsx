import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeroCarousel() {
  return (
    <Carousel className="py-14 space-y-6 lg:text-left w-[630px] mx-auto">
      <CarouselContent>
        <CarouselItem>
            <div className="">
              <img 
              className="border-s border-[1px] border-black rounded-md h-[360px]"
              src="/home.png"
              />
            </div>
            <p className="text-[12px] text-center">Make as many rooms as you want to study different topics, each having its own flashcard sets. </p>
        </CarouselItem> 
        <CarouselItem>
            <div className="">
              <img 
              className="border-s border-[1px] border-black rounded-md h-[360px]"
              src="/classrooms.png"
              />
            </div>
            <p className="text-[12px] text-center">Each classroom can have its own subtopics that can have their own specific flashcards. </p>
        </CarouselItem> 
        <CarouselItem>
            <div className="">
              <img 
              className="border-s border-[1px] border-black rounded-md h-[360px]"
              src="/set.png"
              />
            </div>
            <p className="text-[12px] text-center">Each set in a classroom can have multiple flashcards, testing, multiple choice, ai feedback is there for you!</p>
        </CarouselItem> 
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
  )
}
