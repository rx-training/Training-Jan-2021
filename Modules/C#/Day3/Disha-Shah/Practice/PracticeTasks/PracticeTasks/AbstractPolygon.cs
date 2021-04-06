using System;
using System.Collections.Generic;
using System.Text;

namespace PracticeTasks
{

    public abstract class AbstractPolygon
    {

        public double Length { get; protected set; }
        public double Width { get; protected set; }

        public abstract double GetArea();
    }

    public class AbstractRectangle : AbstractPolygon
    {
        public AbstractRectangle(double length, double width)
        {
            Length = length;
            Width = width;
        }

        public override double GetArea()
        {
            return Length * Width;
        }
    }

}
