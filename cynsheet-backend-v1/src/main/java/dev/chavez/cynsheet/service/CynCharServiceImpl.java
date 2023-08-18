package dev.chavez.cynsheet.service;

import dev.chavez.cynsheet.model.CynCharacter;
import dev.chavez.cynsheet.repository.CynCharacterRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CynCharServiceImpl implements CynCharService{

    @Autowired
    private CynCharacterRepository charRepo;

    public CynCharacter saveCharacter(CynCharacter character){
        charRepo.save(character);
        return character;
    }

    public List<CynCharacter> getAllCharacters(){
        List<CynCharacter> charList = charRepo.findAll();
        if (charList.size() > 0) {
            return charList;
        } else {
            return  new ArrayList<CynCharacter>();
        }
    }

    public Optional<CynCharacter> oneCharacter(String id) {
        return charRepo.findCynCharacterByid(id);
    }

    public void deleteCharacter(String id) {
        charRepo.deleteById(id);
    }


}
