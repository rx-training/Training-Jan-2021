using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Linq.Expressions;


namespace LINQPractice
{
  public  class Expressions
    {
        static void Main(string[] args)
        {
            Expression<Func<Students, bool>> isTeenageerExpr = s => s.age > 12 && s.age < 20;
            Func<Students, bool> isTeenAger = isTeenageerExpr.Compile();
            bool resul = isTeenAger(new Students() { StudentID = 102, StudentName = "steve", age = 14 });
            Console.WriteLine(resul);

            //creating a expression tree
            ParameterExpression pe = Expression.Parameter(typeof(Students), "s");
            MemberExpression me = Expression.Property(pe, "age");
            ConstantExpression ce = Expression.Constant(18, typeof(int));
           BinaryExpression body = Expression.GreaterThanOrEqual(me, ce);
            var IsadultExprTree = Expression.Lambda<Func<Students, bool>>(body, new[] { pe });
            Console.WriteLine("Expression Tree: {0}", IsadultExprTree);

            Console.WriteLine("Expression Tree Body: {0}", IsadultExprTree.Body);

            Console.WriteLine("Number of Parameters in Expression Tree: {0}",
                                            IsadultExprTree.Parameters.Count);

            Console.WriteLine("Parameters in Expression Tree: {0}", IsadultExprTree.Parameters[0]);
        }
     

    }
}
