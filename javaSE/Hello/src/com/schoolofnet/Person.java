package com.schoolofnet;

public class Person {
	public String colorHair; // Cor dos cabelos
	public String eyeColor; // Cor dos olhos
	public Float height; // Altura

	// Metodo construtor, sempre executado ao instanciar a classe.
	public Person(){
		System.out.println("Executing constructor");
	}

	// Metodo construtor2, sempre executado ao instanciar uma classe passando os paramentros.
	public Person(String colorHair, Float height, String eyeColor){
		System.out.println("Executing constructor2");
		this.colorHair = colorHair;
		this.height = height;
		this.eyeColor = eyeColor;
	}

	public void walk(){
		System.out.println("I'm walking...");
	}
}
