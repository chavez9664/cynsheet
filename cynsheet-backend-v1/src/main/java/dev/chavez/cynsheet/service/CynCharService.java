package dev.chavez.cynsheet.service;

import dev.chavez.cynsheet.model.CynCharacter;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CynCharService {

    public CynCharacter saveCharacter(CynCharacter character);
    public List<CynCharacter> getAllCharacters();
    public Optional<CynCharacter> oneCharacter(String id);
    public void deleteCharacter(String id);
}
