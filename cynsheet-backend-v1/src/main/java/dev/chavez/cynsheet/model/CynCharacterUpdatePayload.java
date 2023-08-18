package dev.chavez.cynsheet.model;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class CynCharacterUpdatePayload {
    private String name;
    private String ancestry;
    private String advClass;
    private ArrayList<String> languages;

    private int hp;
    private int mana;
    private int level;


    private int constitution;
    private int might;
    private int finesse;
    private int intellect;
    private int ego;
    private int sense;

    private int perception;
    private int athletics;
    private int thievery;
    private int persuasion;
    private int arcana;
    private int fishing;
}
