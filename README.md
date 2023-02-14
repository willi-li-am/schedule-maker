
# JAC Schedule Maker Winter '23

Schedule maker that lists courses, teachers and teacher ratings
to help students from John Abbott College in preparing for their
course registration.

Made with ReactJS with the help of react-gh-pages to deploy to github pages.

The list of courses comes from a pdf parser that I made, which parses an official pdf of all courses at John Abbott College which includes (Teacher Name, Course Section, Schedule, Course Title, Course Code)

The teacher ratings come from a webscraper that I made. All ratings come from RateMyProfessor.com and uses a function to turn it into a rating out of 100

To use the website click [here](https://trollermaner.github.io/schedule-maker)

Lists of courses to try with:
| Course Code      | Course Title |
| ---------------- | ------------ |
| 201-NYB-05       | Calculus II   |
| 202-NYA-05   | General Chemistry        |
|203-NYA-05|Electricity and Magnetism|
|603-102-MQ|English|
|345-102-MQ|Humanities|
|109-102-MQ|Physical Education|

# Future Features to be added:

1. No class time
  - Can select when to not have classes
2. Course hovering 
  - When hovering, show how the class would look like on the schedule instead of needing to click on it every time
3. Best schedule generator
  - With greedy algorithm, choose the best schedule in terms of teacher rating while following restrictions from user
4. Account creation
  - Makes schedule saving available
  - From what program someone is in, will gray out courses that they are not allowed to take
  - Option to not show courses that need fees
  - Settings to change everything mentioned above
5. Autocomplete
  - While typing in courses, shows possible courses that they are typing out
6. Option to sort by teacher rating
  - Self explanatory
  - Maybe other sorting options
7. Add additional courses
  - Some people have courses that aren't in the course list (those in technical programs), so to make the website work for them, add an additional course option where they can manually put in what time their program courses take place so that they could use the service
8. Improved UI/UX (not a feature)
  - Generally improve the user interface and user experience to make it more appealing to everyone

