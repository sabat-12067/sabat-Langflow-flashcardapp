# LangFlow

LangFlow is a flashcards application I made using React, Redux toolkit, Typescript, Supabase, and Django. This app has a feature called classrooms, 
which is whatever topic the user wants to learn more about, and each classroom has multiple sets of flashcards. The motivation for me building this app was to learn a new
language, and I ended up loving Django!
![LangFlow](/frontend/public/homepage.png)

## Features

- Authentication with Supabase and Redux Toolkit
- Users can create different classes, and each class can have their own flashcard groups
- Flashcards groups have many flashcards with a front and backside
- Light and Dark Mode with Redux Toolkit



## Technologies Used

- The front end technologies include React, Typescript, Redux toolkit, and TanStack query for data fetching
- I used Django's powerful framework called django_rest_framework for the backend API views and models. 
- Supabase is used for both authentication, along with being in sync with my Django backend. So every time I make a migration in Django it is also there in Supabase. I used this to take advantage of Django's ORM, along with having a Supabase hosted database.

## Installation

Clone the repository:

    ```ssh key```
    git clone git@github.com:sabat-12067/sabat-Langflow-flashcardsapp.git

Get your env variables:
    -You will need an env variable for your supabase connection and google credentials for auth from GCP.
## Each Classrooms Study Sets shown in dark mode:
![LangFlow](/frontend/public/StudyRooms.png)
## Hindi set for learning words:
![LangFlow](/frontend/public/hindiset.png)
## Practice mode for a flashcard set learning words in Hindi!:
![LangFlow](/frontend/public/practice.png)

