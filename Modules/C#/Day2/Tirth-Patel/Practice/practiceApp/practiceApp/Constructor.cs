using System;
namespace constructors1
{
	public class Taxi
	{
		public bool isInitialized;
		public Taxi()
        {
			isInitialized = true;
        }
	}
    public class Employee {
		public int salary;
		public Employee() { }
		public Employee(int annualSalary)
        {
			salary = annualSalary;
        }
		public Employee(int WeeklySalary , int numberOfWeeks)
        {
			salary = WeeklySalary * numberOfWeeks;
        }
		public void  display()
        {
            Console.WriteLine(salary);
        }
	
	}
	public class Manager : Employee
    {
		public Manager(int annualsalary): base(annualsalary)
        {
            Console.WriteLine($"Annualsalary of manager is {annualsalary}");
        }
    }
	abstract class Shape
	{
		public const double pi = Math.PI;
		protected double x, y;
		public Shape(double x, double y)
		{
			this.x = x;
			this.y = y;

		}
		public abstract double Area();

	}
		class Circle : Shape 
			{
		public Circle(double radius) : base(radius, 0) { }
		public override double Area()
        {
			return pi * x * x;
        }
        }
	class Cylinder : Circle
    {
		public Cylinder(double radius , double height) :base(radius)
        {
			y = height;

        }
		public override double Area()
        {
			return (2 * base.Area()) + (2 * pi * x * y);
        }
    }


   

}
