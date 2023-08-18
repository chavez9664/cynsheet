package dev.chavez.cynsheet.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.codecs.pojo.annotations.BsonRepresentation;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.repository.Aggregation;

import java.util.ArrayList;
import java.util.UUID;

@Document(collection = "characters")
@Data
@AllArgsConstructor

public class CynCharacter {


    @Id
    private String id;

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

    public CynCharacter() {
        super();
        this.id = UUID.randomUUID().toString();
        this.languages = new ArrayList<>();
    }


}
