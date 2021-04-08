using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.Text;

namespace Day5Practice
{
    // Simple business object. A PartId is used to identify the type of part
    // but the part name can change.
    public class Part
    {
        public string PartName { get; set; }

        public int PartId { get; set; }

        public override string ToString()
        {
            return "ID: " + PartId + "   Name: " + PartName;
        }
        public override bool Equals(object obj)
        {
            if (obj == null) return false;
            Part objAsPart = obj as Part;
            if (objAsPart == null) return false;
            else return Equals(objAsPart);
        }
        public override int GetHashCode()
        {
            return PartId;
        }
        public bool Equals(Part other)
        {
            if (other == null) return false;
            return (this.PartId.Equals(other.PartId));
        }
        // Should also override == and != operators.
    }

    class ArrayPractice
    {
        void ArrayListDisplay(ArrayList myArray)
        {
            foreach (var item in myArray)
            {
                Console.Write($"{item}   ");
            }
            Console.WriteLine();
        }

        void ArrayDisplay(ArrayList myArray, char mySeparator)
        {

            foreach (var item in myArray)
            {
                Console.Write($"{mySeparator}{item}");
            }
            Console.WriteLine();
        }

        void StringDisplay(String[] myArray, char mySeparator)
        {

            foreach (var item in myArray)
            {
                Console.Write($"{mySeparator}{item}");
            }
            Console.WriteLine();
        }

        Point PointFToPoint(PointF pf)
        {
            return new Point(((int)pf.X), ((int)pf.Y));
        }

        public void Display()
        {
            int[] numbers;
            numbers = new int[4];
            numbers[3] = 10;
            int calc = numbers[3] * 2;
            Console.WriteLine($"{numbers[3]}, {calc}");

            // Creates and initializes a new ArrayList.
            ArrayList myAL = new ArrayList();
            myAL.Add("Hello");
            myAL.Add("World");
            myAL.Add("!");
            myAL.Add("Learning");
            myAL.Add("ArrayList");

            myAL[2] = ",";
            Console.WriteLine(myAL[3]);

            // Displays the properties and values of the ArrayList.
            Console.WriteLine("myAL");
            Console.WriteLine("    Count:    {0}", myAL.Count);
            Console.WriteLine("    Capacity: {0}", myAL.Capacity);
            Console.Write("    Values: ");
            ArrayListDisplay(myAL);

            // Create a fixed-size wrapper around the ArrayList.
            ArrayList myFixedSizeAL = ArrayList.FixedSize(myAL);

            // Display whether the ArrayLists have a fixed size or not.
            Console.WriteLine("myAL {0}.", myAL.IsFixedSize ? "has a fixed size" : "does not have a fixed size");
            Console.WriteLine("myFixedSizeAL {0}.", myFixedSizeAL.IsFixedSize ? "has a fixed size" : "does not have a fixed size");
            Console.WriteLine();

            // Display both ArrayLists.
            Console.WriteLine("Initially,");
            Console.Write("Standard  :");
            ArrayDisplay(myAL, ' ');
            Console.Write("Fixed size:");
            ArrayDisplay(myFixedSizeAL, ' ');

            // Sort is allowed in the fixed-size ArrayList.
            myFixedSizeAL.Sort();
            Console.WriteLine($"location of a searched string: {myFixedSizeAL.BinarySearch(",")}");

            // Display both ArrayLists.
            Console.WriteLine("After Sort,");
            Console.Write("Standard  :");
            ArrayDisplay(myAL, ' ');
            Console.Write("Fixed size:");
            ArrayDisplay(myFixedSizeAL, ' ');

            // Reverse is allowed in the fixed-size ArrayList.
            myFixedSizeAL.Reverse();

            // Display both ArrayLists.
            Console.WriteLine("After Reverse,");
            Console.Write("Standard  :");
            ArrayDisplay(myAL, ' ');
            Console.Write("Fixed size:");
            ArrayDisplay(myFixedSizeAL, ' ');

            // Add an element to the standard ArrayList.
            myAL.Add("AddMe");

            // Display both ArrayLists.
            Console.WriteLine("After adding to the standard ArrayList,");
            Console.Write("Standard  :");
            ArrayDisplay(myAL, ' ');
            Console.Write("Fixed size:");
            ArrayDisplay(myFixedSizeAL, ' ');
            Console.WriteLine();

            // Adding or inserting elements to the fixed-size ArrayList throws an exception.
            try
            {
                myFixedSizeAL.Add("AddMe2");
            }
            catch (Exception myException)
            {
                Console.WriteLine("Exception: " + myException.ToString());
            }
            try
            {
                myFixedSizeAL.Insert(3, "InsertMe");
            }
            catch (Exception myException)
            {
                Console.WriteLine("Exception: " + myException.ToString());
            }

            // Creates a read-only copy of the ArrayList.
            ArrayList myReadOnlyAL = ArrayList.ReadOnly(myAL);

            // Displays whether the ArrayList is read-only or writable.
            Console.WriteLine("myAL is {0}.", myAL.IsReadOnly ? "read-only" : "writable");
            Console.WriteLine("myReadOnlyAL is {0}.", myReadOnlyAL.IsReadOnly ? "read-only" : "writable");

            // Displays the contents of both collections.
            Console.WriteLine("\nInitially,");
            Console.WriteLine("The original ArrayList myAL contains:");
            foreach (String myStr in myAL)
                Console.WriteLine("   {0}", myStr);
            Console.WriteLine("The read-only ArrayList myReadOnlyAL contains:");
            foreach (String myStr in myReadOnlyAL)
                Console.WriteLine("   {0}", myStr);

            // Adding an element to a read-only ArrayList throws an exception.
            Console.WriteLine("\nTrying to add a new element to the read-only ArrayList:");
            try
            {
                myReadOnlyAL.Add("green");
            }
            catch (Exception myException)
            {
                Console.WriteLine("Exception: " + myException.ToString());
            }

            // Adding an element to the original ArrayList affects the read-only ArrayList.
            myAL.Add("blue");

            // Displays the contents of both collections again.
            Console.WriteLine("\nAfter adding a new element to the original ArrayList,");
            Console.WriteLine("The original ArrayList myAL contains:");
            foreach (String myStr in myAL)
                Console.WriteLine("   {0}", myStr);
            Console.WriteLine("The read-only ArrayList myReadOnlyAL contains:");
            foreach (String myStr in myReadOnlyAL)
                Console.WriteLine("   {0}", myStr);

            // Creates a synchronized wrapper around the ArrayList.
            ArrayList mySyncdAL = ArrayList.Synchronized(myAL);

            // Displays the sychronization status of both ArrayLists.
            Console.WriteLine("myAL is {0}.", myAL.IsSynchronized ? "synchronized" : "not synchronized");
            Console.WriteLine("mySyncdAL is {0}.", mySyncdAL.IsSynchronized ? "synchronized" : "not synchronized");

            // Creates and initializes a new Queue.
            Queue myQueue = new Queue();
            myQueue.Enqueue("Hello");
            myQueue.Enqueue("World");
            myQueue.Enqueue("!");
            myQueue.Enqueue("Learning");
            myQueue.Enqueue("Queue");
            myQueue.Enqueue("from");
            myQueue.Enqueue("msdn");

            // Copies the Queue elements to the end of the ArrayList.
            myAL.AddRange(myQueue);

            // Displays the ArrayList.
            Console.WriteLine("The ArrayList after AddRange, now contains the following:");
            ArrayDisplay(myAL, '\t');

            // Clone arraylist(copy)
            ArrayList myNewArrayList = (ArrayList)myAL.Clone();
            Console.WriteLine($"After Clone operation on myArrayList to myNewArrayList: ");
            Console.WriteLine($"\tCount:    {myNewArrayList.Count}");
            Console.Write("\tValues:");
            ArrayListDisplay(myNewArrayList);

            // Contains()
            Console.WriteLine($"ArrayList contains Learning: {myAL.Contains("Learning")}");

            // Creates and initializes the one-dimensional target Array.
            String[] myTargetArray = new String[15];
            myTargetArray[0] = "The";
            myTargetArray[1] = "quick";
            myTargetArray[2] = "brown";
            myTargetArray[3] = "fox";
            myTargetArray[4] = "jumps";
            myTargetArray[5] = "over";
            myTargetArray[6] = "the";
            myTargetArray[7] = "lazy";
            myTargetArray[8] = "dog";

            // Displays the values of the target Array.
            Console.WriteLine("The target Array contains the following (before and after copying):");
            StringDisplay(myTargetArray, ' ');

            // Copies the second element from the source ArrayList to the target Array starting at index 6.
            myAL.CopyTo(1, myTargetArray, 7, 1);

            // Displays the values of the target Array.
            StringDisplay(myTargetArray, ' ');

            // Copies the entire source ArrayList to the target Array starting at index 0.
            myAL.CopyTo(myTargetArray);

            // Displays the values of the target Array.
            StringDisplay(myTargetArray, ' ');

            // GetEnumerator
            IEnumerator enumerator = myAL.GetEnumerator();
            while (enumerator.MoveNext())
            {
                Console.WriteLine(enumerator.Current);
            }

            // Displays the values of five elements starting at index 0.
            ArrayList mySubAL = myAL.GetRange(0, 5);
            Console.WriteLine("Index 0 through 4 contains:");
            ArrayDisplay(mySubAL, '\t');

            // Replaces the values of five elements starting at index 1 with the values in the ICollection.
            myAL.SetRange(1, myQueue);

            // Displays the values of five elements starting at index 0.
            mySubAL = myAL.GetRange(0, 5);
            Console.WriteLine("Index 0 through 4 now contains:");
            ArrayDisplay(mySubAL, '\t');

            // IndexOf
            Console.WriteLine($"IndexOf Learning: {myAL.IndexOf("Learning")}");

            Console.WriteLine($"IndexOf Learning: {myAL.IndexOf("Learning", 2)}");

            // InsertRange
            // Copies the Queue elements to the ArrayList at index 1.
            myAL.InsertRange(1, myQueue);
            ArrayListDisplay(myAL);

            // Search for "Learning" and add "Practicing" before it.
            myAL.Insert(myAL.IndexOf("Learning"), "Practicing");
            ArrayListDisplay(myAL);

            // Add "!!!" at the end.
            myAL.Insert(myAL.Count, "!!!");
            ArrayListDisplay(myAL);

            // LastIndexOf
            Console.WriteLine($"LastIndexOf Learning: {myAL.LastIndexOf("Learning")}");

            // Remove
            // Removes the element containing "World".
            Console.WriteLine("Remove:");
            myAL.Remove("World");
            ArrayListDisplay(myAL);

            // RemoveAt
            // Removes the element at index 5.
            Console.WriteLine("RemoveAt:");
            myAL.RemoveAt(5);
            ArrayListDisplay(myAL);

            // RemoveRange
            // Removes three elements starting at index 4.
            Console.WriteLine("RemoveRange:");
            myAL.RemoveRange(4, 3);
            ArrayListDisplay(myAL);

            // Repeat
            // Creates a new ArrayList with seven elements and initialize each element with the string "abc".
            Console.WriteLine("Repeat:");
            ArrayList myRepeatAL = ArrayList.Repeat(null, 5);
            ArrayListDisplay(myRepeatAL);
            myRepeatAL = ArrayList.Repeat("abc", 7);
            ArrayListDisplay(myRepeatAL);

            // Reverse
            // Reverses the sort order of the values of the ArrayList.
            Console.WriteLine("Reverse:");
            myAL.Reverse();
            ArrayListDisplay(myAL);

            // ToArray
            // Copies the elements of the ArrayList to a string array.
            Console.WriteLine("ToArray:");
            String[] myArr = (String[])myAL.ToArray(typeof(string));
            for (int i = 0; i < myArr.Length; i++)
                Console.WriteLine("\t[{0}]:\t{1}", i, myArr[i]);
            Console.WriteLine();

            // Clear()
            myAL.Clear();
            Console.WriteLine("myAL");
            Console.WriteLine("    Count:    {0}", myAL.Count);
            Console.WriteLine("    Capacity: {0}", myAL.Capacity);
            Console.Write("    Values: ");
            ArrayListDisplay(myAL);



            // Generic Collections Practice (List)
            Console.WriteLine("Generic Collections Practice:");
            // Create a list of parts.
            List<Part> parts = new List<Part>();

            // Add parts to the list.
            parts.Add(new Part() { PartName = "crank arm", PartId = 1234 });
            parts.Add(new Part() { PartName = "chain ring", PartId = 1334 });
            parts.Add(new Part() { PartName = "regular seat", PartId = 1434 });
            parts.Add(new Part() { PartName = "banana seat", PartId = 1444 });
            parts.Add(new Part() { PartName = "cassette", PartId = 1534 });
            parts.Add(new Part() { PartName = "shift lever", PartId = 1634 });

            // Write out the parts in the list. This will call the overridden ToString method
            // in the Part class.
            Console.WriteLine();
            foreach (Part aPart in parts)
            {
                Console.WriteLine(aPart);
            }

            // Check the list for part #1734. This calls the IEquatable.Equals method
            // of the Part class, which checks the PartId for equality.
            Console.WriteLine("\nContains(\"1734\"): {0}",
            parts.Contains(new Part { PartId = 1734, PartName = "" }));

            // Insert a new item at position 2.
            Console.WriteLine("\nInsert(2, \"1834\")");
            parts.Insert(2, new Part() { PartName = "brake lever", PartId = 1834 });

            //Console.WriteLine();
            foreach (Part aPart in parts)
            {
                Console.WriteLine(aPart);
            }

            Console.WriteLine("\nParts[3]: {0}", parts[3]);

            Console.WriteLine("\nTrueForAll(seat): {0}",
            parts.TrueForAll(x => x.PartName.EndsWith("seat")));

            // Find items where name contains "seat".
            Console.WriteLine("\nFind: Part where name contains \"seat\": {0}",
                parts.Find(x => x.PartName.Contains("seat")));

            // Find last items where name contains "seat".
            Console.WriteLine("\nFindLast: Part where name contains \"seat\": {0}",
                parts.FindLast(x => x.PartName.Contains("seat")));

            // Find All items where name contains "seat".
            Console.WriteLine("\nFindAll: Part where name contains \"seat\": {0}");
            List<Part> sublist = parts.FindAll(x => x.PartName.Contains("seat"));
            
            // Display the contents of the list using the Print method.
            Console.WriteLine("Display using foreach");
            sublist.ForEach(x => Console.WriteLine(x));


            // Check if an item with Id 1444 exists.
            Console.WriteLine("\nExists: Part with Id=1444: {0}",
                parts.Exists(x => x.PartId == 1444));

            Console.WriteLine("\nRemove(\"1534\")");

            // This will remove part 1534 even though the PartName is different,
            // because the Equals method only checks PartId for equality.
            parts.Remove(new Part() { PartId = 1534, PartName = "cogs" });

            Console.WriteLine();
            foreach (Part aPart in parts)
            {
                Console.WriteLine(aPart);
            }
            Console.WriteLine("\nRemoveAt(3)");
            // This will remove the part at index 3.
            parts.RemoveAt(3);

            Console.WriteLine();
            foreach (Part aPart in parts)
            {
                Console.WriteLine(aPart);
            }

            // Find last items where name contains "seat".
            Console.WriteLine("\nExists: Part where name contains \"seat\": {0}",
                parts.Exists(x => x.PartName.Contains("seat")));

            // Find last items where name contains "seat".
            Console.WriteLine("\nRemoveAll: Part where name contains \"seat\": {0}",
                parts.RemoveAll(x => x.PartName.Contains("seat")));



            // ConvertAll
            List<PointF> lpf = new List<PointF>();

            lpf.Add(new PointF(27.8F, 32.62F));
            lpf.Add(new PointF(99.3F, 147.273F));
            lpf.Add(new PointF(7.5F, 1412.2F));

            Console.WriteLine();
            foreach (PointF p in lpf)
            {
                Console.WriteLine(p);
            }

            List<Point> lp = lpf.ConvertAll(
                new Converter<PointF, Point>(PointFToPoint));

            Console.WriteLine();
            foreach (Point p in lp)
            {
                Console.WriteLine(p);
            }
        }
    }
}
