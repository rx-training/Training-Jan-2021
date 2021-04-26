using System;
using System.Collections.Generic;
using System.Text;

namespace prac
{

        abstract class Polygon
        {
            public int length { get; set; }
            public int width { get; set; }

            abstract public int GetArea();
        }
        class Rectangle : Polygon
        {
            public Rectangle(int l, int w)
            {
                length = l;
                width = w;
            }

            public override int GetArea()
            {
                return width * length;
            }
        }

    
}
