using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    interface IComparePrice<Car> // Can also have properties which has to be defined in the implementing class
    {
        public string CarType { get; set; }
        bool IsMoreExpensiveThan(Car car); 
    }
    public class Car : IEquatable<Car>, IComparePrice<Car> // can implement multiple interfaces
    {
        public string CarType { get; set; } // defining prop
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int Price { get; set; }

        // Implementation of IEquatable<T> interface
        public bool Equals(Car car)
        {
            return (this.Make, this.Model, this.Year) == (car.Make, car.Model, car.Year);
        }

        public bool IsMoreExpensiveThan(Car car)
        {
            return this.Price > car.Price;
        }
    }
}
