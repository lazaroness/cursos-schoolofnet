package com.schoolofnet;

public class HelloWorld {
	public static void main(String[] args) {
		System.out.println("Hello World from School of net");
		Person a = new Person();
		a.colorHair = "Castanho";
		a.height = (float) 1.75;
		a.eyeColor = "Castanho";

		System.out.println(a.colorHair);
		a.walk();

		Person b = new Person("Black", (float) 1.70, "Blue");
		b.walk();
		System.out.println(b.colorHair);
	}
}
