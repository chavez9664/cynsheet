package dev.chavez.cynsheet.controller;


import dev.chavez.cynsheet.model.CynCharacter;
import dev.chavez.cynsheet.model.CynCharacterUpdatePayload;
import dev.chavez.cynsheet.service.CynCharServiceImpl;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/characters/manager")
public class CynCharacterController {

    @Autowired
    private CynCharServiceImpl charService;

    @PostMapping("/saveCharacter")
    public ResponseEntity<CynCharacter> saveCharacter(@RequestBody CynCharacter character) {
        return new ResponseEntity<>(
                charService.saveCharacter(character),
                HttpStatus.OK
        );
    }
    @PutMapping("/updateCharacter/{id}")
    public ResponseEntity<?> updateCharacter(@PathVariable String id, @RequestBody CynCharacterUpdatePayload characterUpdatePayload) {
        Optional<CynCharacter> search = charService.oneCharacter(id);

        if (!search.isPresent()) {
            return new ResponseEntity<>(
                    "Student not found",
                    HttpStatus.BAD_REQUEST
            );
        }

        search.ifPresent(s -> {
            s.setName(characterUpdatePayload.getName());
            s.setAncestry(characterUpdatePayload.getAncestry());
            s.setAdvClass(characterUpdatePayload.getAdvClass());
            s.setLanguages(characterUpdatePayload.getLanguages());

            s.setHp(characterUpdatePayload.getHp());
            s.setMana(characterUpdatePayload.getMana());
            s.setLevel(characterUpdatePayload.getLevel());

            s.setConstitution(characterUpdatePayload.getConstitution());
            s.setMight(characterUpdatePayload.getMight());
            s.setFinesse(characterUpdatePayload.getFinesse());
            s.setIntellect(characterUpdatePayload.getIntellect());
            s.setEgo(characterUpdatePayload.getEgo());
            s.setSense(characterUpdatePayload.getSense());

            s.setPerception(characterUpdatePayload.getPerception());
            s.setAthletics(characterUpdatePayload.getAthletics());
            s.setThievery(characterUpdatePayload.getThievery());
            s.setPersuasion(characterUpdatePayload.getPersuasion());
            s.setArcana(characterUpdatePayload.getArcana());
            s.setFishing(characterUpdatePayload.getFishing());
            charService.saveCharacter(s);
        });

        return new ResponseEntity<>(
                "Student Successfully Updated",
                HttpStatus.OK
        );
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<CynCharacter>> getAllCharacters() {
        List<CynCharacter> charList = charService.getAllCharacters();
        return new ResponseEntity<>(
                charList,
                HttpStatus.OK
        );
    }

    @GetMapping("/getCharacter/{id}")
    public ResponseEntity<Optional<CynCharacter>> getOneCharacter(@PathVariable String id) {
        return new ResponseEntity<Optional<CynCharacter>>(
                charService.oneCharacter(id),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCharacter(@PathVariable String id) {
        charService.deleteCharacter(id);
        return ResponseEntity.ok().build();
    }


}
