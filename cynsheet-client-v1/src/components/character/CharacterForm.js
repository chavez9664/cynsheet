import React from "react";
import { useForm, useFieldArray} from "react-hook-form"
import { useState } from "react";
import api from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import CFHeader from "./CFHeader";

export function CharacterForm({preloadedValues}) {


    const history = useNavigate();
    const {control, register, handleSubmit} = useForm({
        defaultValues: preloadedValues
    });

    const {fields, append, remove} = useFieldArray({
        control,
        name: "languages",
    });

    const onSubmit = (data) => {

        api.post('/characters/manager/saveCharacter', data)
        .then(function (response) {
            
            console.log('character updated')
            history('/')
        })
        .catch(function (error) {
            console.log(error)
        }) 
         
    }

    const deleteCharacter = () => {
         api.delete('/characters/manager/delete/' + preloadedValues.id)
         .then(function (response) {
             console.log(response)
             console.log('character has been deleted')
             history('/');
         })
         .catch(function (error) {
             console.log(error)
         });
     }

    return (
       <div>
        <form onSubmit={(handleSubmit(onSubmit))}>
        <CFHeader/>
        <label>Name</label>
            <input 
                type="text"
                placeholder="Enter Name"
                name="name"
                {... register("name", {
                    required: "Required"
                })}
            />
        <label>Ancestry</label>    
            <input 
                type="text"
                placeholder="Enter Ancestry"
                name="ancestry"
                {... register("ancestry", {
                    required: "Required"
                })}
            />
        <label>Adventuring Class</label>
            <select
                name="advClass"
                {... register("advClass", {
                    required: "Required"
                })}
                >
                <option value="Runner">Runner</option>
                <option value="Scholar">Scholar</option>
                <option value="Spellslinger">Spellslinger</option>
                <option value="Vanguard">Vanguard</option>
            </select>
        <label>HP</label>
            <input
                type="number"
                name="hp"
                {... register("hp", {
                    required: "Required"
                })}
                min={1}
                max={24}
            />
        <label>Mana</label>
            <input
                type="number"
                name="mana"
                {... register("mana", {
                    required: "Required"
                })}
                min={1}
                max={18}
            />
        <label>Level</label>
            <input
                type="number"
                name="level"
                {... register("level", {
                    required: "Required"
                })}
                min={1}
                max={2}
            />
        <label>Constitution</label>
            <input
                type="number"
                name="constitution"
                {... register("constitution", {
                    required: "Required"
                })}
                min={0}
                max={3}
            />
        <label>Might</label>
            <input
                type="number"
                name="might"
                {... register("might", {
                    required: "Required"
                })}
                min={0}
                max={3}
            />
        <label>Finesse</label>
            <input
                type="number"
                name="finesse"
                {... register("finesse", {
                    required: "Required"
                })}
                min={0}
                max={3}
            />
        <label>Intellect</label>
            <input
                type="number"
                name="intellect"
                {... register("intellect", {
                    required: "Required"
                })}
                min={0}
                max={3}
            />
        <label>Ego</label>
            <input
                type="number"
                name="ego"
                {... register("ego", {
                    required: "Required"
                })}
                min={0}
                max={3}
            />
        <label>Sense</label>
            <input
                type="number"
                name="sense"
                {... register("sense", {
                    required: "Required"
                })}
                min={0}
                max={3}
            />
        <label>Perception</label>
            <input
                type="number"
                name="perception"
                {... register("perception", {
                    required: "Required"
                })}
                min={0}
                max={2}
            />
        <label>Athletics</label>
            <input
                type="number"
                name="athletics"
                {... register("athletics", {
                    required: "Required"
                })}
                min={0}
                max={2}
            />
        <label>Thievery</label>
            <input
                type="number"
                name="thievery"
                {... register("thievery", {
                    required: "Required"
                })}
                min={0}
                max={2}
            />
        <label>Persuasion</label>
            <input
                type="number"
                name="persuasion"
                {... register("persuasion", {
                    required: "Required"
                })}
                min={0}
                max={2}
            />
        <label>Arcana</label>
            <input
                type="number"
                name="arcana"
                {... register("arcana", {
                    required: "Required"
                })}
                min={0}
                max={2}
            />
        <label>Fishing</label>
            <input
                type="number"
                name="fishing"
                {... register("fishing", {
                    required: "Required"
                })}
                min={0}
                max={2}
            />
        <label>Languages</label>
        {fields.map((field, index) => {
            return (
                <div key={field.id}>
                <input
                key={field.id}
                name="languages"
                {...register(`languages.${index}`)}
                />
                <button type="button" onClick={() => remove(index)}>Remove</button>
                </div>
            )
            })}
        <button type="button" onClick={() => append()}>Add a Language</button>
        <button type = "submit">Save Character</button>
        <button type="button" onClick={() => deleteCharacter()}>Delete Character</button>       
        </form>
       </div>  
    );
}