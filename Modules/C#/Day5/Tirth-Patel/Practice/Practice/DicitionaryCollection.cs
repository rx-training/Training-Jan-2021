using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    class DicitionaryCollection
    {
        public DicitionaryCollection()
        {
            Dictionary<string, string> capitals = new Dictionary<string, string>();
            capitals.Add("Alabama", "Montgomery");
            capitals.Add("Alaska", "Juneau");
            capitals.Add("Arizona", "Phonenix");
            capitals.Add("Massachusetts", "Boston");
            capitals.Add("Wyoming", "Cheneyenee");

            String Capital = capitals["Massachusetts"];
            Console.WriteLine("The capital of Massachusetts is {0}",Capital);
            var thestates = State.GetStates();
            var India = thestates["India"];
            Console.WriteLine("the capital of india is:{0} Population is:{1} Size is:{2}",India.Capital,India.population,India.size);
        }
        
    }
    public class State
    {
        public string Capital { get; set; }
        public int population { get; set; }
        public int size { get; set; }

        public State(string capital , int pop,int size)
        {
            this.Capital = capital;
            this.population = pop;
            this.size = size;
        }

        public static Dictionary<string, State> GetStates()
        {
            var states = new Dictionary<string, State>();
            var theStates = new State("Montgomery", 123456, 123);
            states.Add("Alabama", theStates);
            theStates = new State("Delhi", 203120312, 23131);
            states.Add("India",theStates);
            return states;
        }

    }
}
