package dev.chavez.cynsheet.repository;

import dev.chavez.cynsheet.model.CynCharacter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CynCharacterRepository extends MongoRepository<CynCharacter, String> {

    Optional<CynCharacter> findCynCharacterByid(String id);

}
