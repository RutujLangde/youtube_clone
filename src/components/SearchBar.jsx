import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";


const SearchBar = () => {
   
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandelSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`)
        }

        setSearchTerm('');
    }


    return (
        <Paper
            component='form'
            onSubmit={onhandelSubmit}
            sx={{
                borderRadius: 20,
                border: '2px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 3 }
            }}>

            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
               
            />
            <IconButton type="submit" sx={{ p: '10px', color: 'red', }}>
                <Search />
            </IconButton>



        </Paper>
    )
}

export default SearchBar
