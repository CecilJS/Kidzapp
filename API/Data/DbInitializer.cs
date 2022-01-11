using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context){
            if(context.Products.Any()) return;

                var products = new List<Product>
                {
                    		new Product
                {
                    Name = "Fisher Price",
                    Description =  "The caterpillar-like toy works by actually taking the most fundamental concepts of programming and breaking them down into a format that would both entertain and educate a young human. The Code-a-Pillar has eight segments, each of which have a different command icon that controls how the toy moves or acts. Children choose how to connect the eight parts, and once they push start, the caterpillar moves according to its 'programming.'",
                    Price = 50,
                    PictureUrl = "/images/products/fisher-price.png",
                    Brand = "Mattel",
                    Type = "Robot",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Botzees",
                    Description = "Robot Botzees It is positioned as an educational toy for children from 4 years old. In its structure, it is a constructor that develops motor skills and mindfulness. There are simple commands in the Blockly language, which are actively integrated into devices of such a plan. And as a gaming component – management and AR-card.",
                    Price = 90,
                    PictureUrl = "/images/products/botzees.png",
                    Brand = "Pai Technology",
                    Type = "Robots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "AILA Sit & Play™ Deluxe Bundle",
                    Description = "Animal Island Learning Adventure (AILA) is an essential preschool learning system, exclusively on a toddler-friendly device that is hands-free, worry-free, all-in-one intelligent monitor and edutainment system. Animal Island Learning Adventure (AILA) learning sessions provide quality preschool experiences and social emotional development to better prepare your child for preschool.",
                    Price = 140,
                    PictureUrl = "/images/products/animal-Island-aila.png",
                    Brand = "DMAI, Inc.",
                    Type = "Coding Kits",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "WowWee COJI",
                    Description = "Kids can program the WowWee COJI Coding Robot by using emojis. They can use a tablet or smartphone to load programs onto the robot, though some basic functions are available even without a mobile device.",
                    Price = 30,
                    PictureUrl = "/images/products/wowwee.png",
                    Brand = "WowWee Group Limited",
                    Type = "Robots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Thinkfun Circuit Maze",
                    Description = "With this game, older kids can build actual circuits, using a 5x5 grid on which the player draws a challenge card and then has to insert mechanical components to make a working circuit in order to turn on a light.",
                    Price = 29,
                    PictureUrl = "/images/products/think-fun-circuit-maze.png",
                    Brand = "ThinkFun",
                    Type = "Board Games",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Get Coding",
                    Description = "This book teaches kids the fundamentals of programming and helps lay the foundation for advance programming in later years. Through practical examples, children begin to learn the building blocks of computer program and develop a conceptual understanding of what underpins such programs.",
                    Price = 15,
                    PictureUrl = "/images/products/get-coding.png",
                    Brand = "Walker Books",
                    Type = "Books",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Everything Kids Scratch Coding Book",
                    Description = "The Everything Kids’ Scratch Coding Book helps children get a head start on this new essential skill, with Scratch coding—a language designed by MIT specifically to help a younger audience learn to code.",
                    Price = 20,
                    PictureUrl = "/images/products/scratch-coding-book.png",
                    Brand = "Jason Rukman",
                    Type = "Books",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Artie 3000",
                    Description = "Artie 3000 is a little robot designed to help teach kids to code. It's marketed to parents and educators as an 'award-winning coding robot.'",
                    Price = 8000,
                    PictureUrl = "/images/products/artie.png",
                    Brand = "Artie Max™",
                    Type = "Robots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Think Fun Robot Turtles",
                    Description = "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 24,
                    PictureUrl = "/images/products/think-fun-robot-turtles.png",
                    Brand = "ThinkFun",
                    Type = "Board Games",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Kibo",
                    Description = "KIBO, the new coding kit from Kinderlab for kids ages 4 to 7, is the newest addition to screen-free, learn-to-code sets that teach computational thinking to our youngest students",
                    Price = 189,
                    PictureUrl = "/images/products/kibo-robot.png",
                    Brand = "KinderLab Robotics",
                    Type = "Coding Kits",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Kano Computer Kit",
                    Description =
                        "For kids who want to build their own computer, the Kano kit makes the whole process less intimidating. And it's a real computer, powered by a Raspberry Pi 3 processor and Kano's own operating system, plus a keyboard",
                    Price = 340,
                    PictureUrl = "/images/products/Kano.png",
                    Brand = " Kano Computing Ltd",
                    Type = "Computers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Sphero SPRK+",
                    Description =
                        "The Sphero SPRK+ is designed to help kids learn coding techniques with a simple programming language. Sphero works with one app called Lightning Lab and another called Sphero Edu. ",
                    Price = 90,
                    PictureUrl = "/images/products/Sphero.png",
                    Brand = "Sphero",
                    Type = "Robots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Computer Coding Projects for Kids",
                    Description =
                        "Coding for kids is easy with this colourful illustrated guide by best-selling education author Carol Vorderman. Based on the programming language Scratch, the book is divided into a range of creative projects and each one is illustrated with simple, step-by-step instructions that walk beginners through the basics of computer coding",
                    Price = 23,
                    PictureUrl = "/images/products/computer-coding.png",
                    Brand = "Carol Vorderman",
                    Type = "Books",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Lift-the-flap Computers and Coding",
                    Description =
                        "Introduce your child to a vital subject the fun, interactive way with this colourful lift-the-flap guide to computers and the basics of coding.",
                    Price = 25,
                    PictureUrl = "/images/products/lift_the_flap.png",
                    Brand = "Rosie Dickins",
                    Type = "Books",
                    QuantityInStock = 100
                }
                
                
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}