package com.example.oblig1web1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class KinobillettRepository {

    @Autowired
    JdbcTemplate db;

    // Custom RowMapper instead of using BeanPropertyRowMapper
    class KinobillettRowMapper implements RowMapper< Kinobillett > {
        @Override
        public Kinobillett mapRow(ResultSet rs, int rowNum) throws SQLException {
            Kinobillett kinobillett = new Kinobillett();
            kinobillett.setId(rs.getLong("id"));
            kinobillett.setFilm(rs.getString("film"));
            kinobillett.setAntall(rs.getInt("antall"));
            kinobillett.setFornavn(rs.getString("fornavn"));
            kinobillett.setEtternavn(rs.getString("etternavn"));
            kinobillett.setTelefon(rs.getString("telefon"));
            kinobillett.setEpost(rs.getString("epost"));
            return kinobillett;
        }
    }

    public void lagreBillett (Kinobillett billett){
        String sql = "INSERT INTO Kinobillett (film,antall,fornavn,etternavn,telefon,epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(),
                billett.getEtternavn(), billett.getTelefon(), billett.getEpost());
    }

    public List<Kinobillett> hentBilletter() {
        String sql = "SELECT * FROM Kinobillett ORDER BY etternavn";
        return db.query(sql, new KinobillettRowMapper());
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM Kinobillett";
        db.update(sql);
    }

    public int oppdaterBillett(Kinobillett billett) {
        String sql = "UPDATE Kinobillett SET film =?, antall =?, fornavn =?, etternavn =?, telefon =?, epost =? where id= ?";
        return db.update(sql, billett.getFilm(),billett.getAntall(), billett.getFornavn(), billett.getEtternavn()
        , billett.getTelefon(), billett.getEpost(), billett.getId());
    }

    public Kinobillett hentEtterID(long id){
        return db.queryForObject("SELECT * FROM Kinobillett WHERE id = ?",
                new KinobillettRowMapper(), id);
    }

    public int slettBillett(Long id){
        String sql = "DELETE FROM Kinobillett WHERE id = ?";
        return db.update(sql, new Object[]{
                id
        });
    }

}
