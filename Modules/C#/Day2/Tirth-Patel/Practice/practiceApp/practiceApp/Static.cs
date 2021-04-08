using System;

public class Employee4
{
	public string id;
	public string name;
	public Employee4() { }
	public Employee4(string name , string id)
    {
		this.name = name;
		this.id = id;

    }
	public static int counter;
	public static int AddEmployee()
    {
		return ++counter;
    }
	
}
