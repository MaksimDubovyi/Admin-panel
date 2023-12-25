"use client";
import { getContactsId } from "../../../services/getContacts";
import { useEffect, useState } from "react";
import { Container, TextField,Button,Switch,FormControlLabel, Grid } from "@mui/material";
import {EDUCATION,RELATIONSHIP,LGBT_TOLERANT,CHILDREN,FINANCIAL,PETS,ORIENTATION,LANGUAGES,GOALS,HOBBIES,VALUABLES,GENRES,RELIGION} from "../../data"
import { FormSelect } from "./components/FormSelect";
import { SmartList } from "./components/SmartList";
import { NestedList } from "./components/NestedList/NestedList";
import Loading from "/app/loading";

export default  function Contact({ params: { id } }) {

    const [contact, setContacts]= useState([]);

    const [about, setAbout] = useState('');
    const [workName, setWorkName] = useState('');
    const [workPosition, setWorkPosition] = useState('');

    const [algorithmFinancial, setAlgorithmFinancial] = useState(false);
    const [algorithmReligion, setAlgorithmReligion] = useState(false);
    const [readyToUseTranslator, setReadyToUseTranslator] = useState(false);
    const [readyWithForeigners, setReadyWithForeigners] = useState(false);
    const [showOnlyYourSexuality, setShowOnlyYourSexuality] = useState(false);

    const [pets, setPets] = useState(-1);
    const [educationGrade, setEducationGrade] = useState(-1);
    const [financial, setFinancial] = useState(-1);
    const [hasChildren, setHasChildren] = useState(-1);
    const [relationshipStatus, setRelationshipStatus] = useState(-1);
    const [lgbtTolerant, setLgbtTolerant] = useState(-1);
    const [sexuality, setSexuality] = useState(-1);
    const [religion, setReligion] = useState(-1);
    
    const [langs, setLangs] = useState([]);
    const [valuables, setValuables] = useState([]);
    const [bookGenre, setBookGenre] = useState([]);
    const [movieGenre, setMovieGenre] = useState([]);
    const [musicGenre, setMusicGenre] = useState([]);

    const [goal, setGoal] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    
    
    
    useEffect(() => {
      getContactsId(id)
        .then((data) => {
          setContacts(data);
          setAbout(data[0].profile.about);
          setWorkName(data[0].profile.workName);
          setWorkPosition(data[0].profile.workPosition);

          setAlgorithmFinancial(data[0].profile.algorithmFinancial);
          setAlgorithmReligion(data[0].profile.algorithmReligion);
          setReadyToUseTranslator(data[0].profile.readyToUseTranslator);
          setReadyWithForeigners(data[0].profile.readyWithForeigners);
          setShowOnlyYourSexuality(data[0].profile.showOnlyYourSexuality);
      
          setPets(data[0].profile.petsTolerant);
          setEducationGrade(data[0].profile.educationGrade);
          setFinancial(data[0].profile.financial);
          setHasChildren(data[0].profile.hasChildren);
          setRelationshipStatus(data[0].profile.relationshipStatus);
          setLgbtTolerant(data[0].profile.lgbtTolerant);
          setSexuality(data[0].profile.sexuality);
          setReligion(data[0].profile.religion);

          setLangs(data[0].profile.langs);
          setValuables(data[0].profile.valuables);
          setBookGenre(data[0].profile.bookGenre);
          setMovieGenre(data[0].profile.movieGenre);
          setMusicGenre(data[0].profile.musicGenre);

          setGoal(data[0].profile.goal);
          setHobbies(data[0].profile.hobbies);
        })
        .catch((error) => {
          console.error('Error fetching contact:', error);
        });
        
    }, [id]);




    const handleAboutChange = (event) => {
        setAbout(event.target.value);     
    }; 
    const handleWorkNameChange = (event) => {
      setWorkName(event.target.value);     
    };
    const handleWorkPositionChange = (event) => {
    setWorkPosition(event.target.value);     
    };
    const handleAlgorithmFinancialChange = (event) => {
      setAlgorithmFinancial(event.target.checked);
    };
    const handleAlgorithmReligionChange = (event) => {
      setAlgorithmReligion(event.target.checked);
    };
    const handleReadyToUseTranslatorChange = (event) => {
      setReadyToUseTranslator(event.target.checked);
    };
    const handleReadyWithForeignersChange = (event) => {
      setReadyWithForeigners(event.target.checked);
    };
    const handleShowOnlyYourSexualityChange = (event) => {
      setShowOnlyYourSexuality(event.target.checked);
    };

    const handleChangePets = (event) => {
      setPets(event.target.value);
    };
    const handleChangeEducationGrade = (event) => {
      setEducationGrade(event.target.value);
    };
    const handleChangeFinancial = (event) => {
      setFinancial(event.target.value);
    };
    const handleChangeHasChildren = (event) => {
      setHasChildren(event.target.value);
    };

    const handleChangeRelationshipStatus = (event) => {
      setRelationshipStatus(event.target.value);
    };
    const handleChangeLgbtTolerant = (event) => {
      setLgbtTolerant(event.target.value);
    };
    const handleChangeSexuality = (event) => {
      setSexuality(event.target.value);
    };
    const handleChangeReligion = (event) => {
      setReligion(event.target.value);
    };
  
    
    const handleChangeLangs = (event) => {
      setLangs(event);
    };
    const handleChangeValuables = (event) => {
      setValuables(event);
    };
    const handleChangeBookGenre = (event) => {
      setBookGenre(event);
    };
    const handleChangeMovieGenre = (event) => {
      setMovieGenre(event);
    };
    const handleChangeMusicGenre = (event) => {
      setMusicGenre(event);
    };
    

      const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(contact[0].profile)
        console.log("goal",goal)
      };

    try {
     
        if (contact.length === 0) {
            return <div className='container'>
              <h1>Contact is not available</h1>
              <Loading/>
              </div>;
          }
  
            return (
              <Container maxWidth="xl" sx={{ mt: "30px", mb:"150px"}}>
                <form onSubmit={handleSubmit}>

                  <TextField autoFocus margin="dense" id="workName" label="WorkName" type="text" value={workName} fullWidth onChange={handleWorkNameChange}/>
                  <TextField autoFocus margin="dense" id="workPosition" label="WorkPosition" type="text" value={workPosition} fullWidth onChange={handleWorkPositionChange}/>
                  <TextField autoFocus margin="dense" id="about" label="About" type="text" value={about} fullWidth onChange={handleAboutChange}/>

                  <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <FormControlLabel control={<Switch checked={algorithmFinancial} onChange={handleAlgorithmFinancialChange} />} label="AlgorithmFinancial"/>
                        <FormControlLabel  control={<Switch checked={algorithmReligion} onChange={handleAlgorithmReligionChange} />} label="AlgorithmReligion" />
                        <FormControlLabel  control={<Switch checked={readyToUseTranslator} onChange={handleReadyToUseTranslatorChange} />} label="ReadyToUseTranslator" />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControlLabel  control={<Switch checked={readyWithForeigners} onChange={handleReadyWithForeignersChange} />} label="ReadyWithForeigners" />
                        <FormControlLabel  control={<Switch checked={showOnlyYourSexuality} onChange={handleShowOnlyYourSexualityChange} />} label="ShowOnlyYourSexuality" />
                      </Grid>
                   </Grid>

                   <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <FormSelect value={educationGrade} label={"EDUCATION"} data={EDUCATION}  handleChange={handleChangeEducationGrade}/>
                        <FormSelect  value={financial} label={"FINANCIAL"} data={FINANCIAL}  handleChange={handleChangeFinancial}/>
                        <FormSelect  value={relationshipStatus} label={"RELATIONSHIP"} data={RELATIONSHIP}  handleChange={handleChangeRelationshipStatus}/>
                        <FormSelect  value={hasChildren} label={"CHILDREN"} data={CHILDREN}  handleChange={handleChangeHasChildren}/>
                        <FormSelect  value={lgbtTolerant} label={"LGBT TOLERANT"} data={LGBT_TOLERANT}  handleChange={handleChangeLgbtTolerant}/>
                        <FormSelect  value={sexuality} label={"ORIENTATION"} data={ORIENTATION}  handleChange={handleChangeSexuality}/>
                        <FormSelect   value={pets} label={"PETS"} data={PETS}  handleChange={handleChangePets}/>
                        <FormSelect   value={religion} label={"RELIGION"} data={RELIGION}  handleChange={handleChangeReligion}/>
                      </Grid>
                      <Grid item xs={8}>
                        <SmartList   value={langs} label={"LANGUAGES"} data={LANGUAGES}  handleChange={handleChangeLangs}/>
                        <SmartList   value={valuables} label={"VALUABLES"} data={VALUABLES}  handleChange={handleChangeValuables}/>
                        <SmartList   value={bookGenre} label={"LITERATURE"} data={GENRES.Literature}  handleChange={handleChangeBookGenre}/>
                        <SmartList   value={movieGenre} label={"CINEMA"} data={GENRES.Cinema}  handleChange={handleChangeMovieGenre}/>
                        <SmartList   value={musicGenre} label={"MUSIC"} data={GENRES.Music}  handleChange={handleChangeMusicGenre}/>

                        <NestedList data={HOBBIES} title={"HOBBIES"} selected={hobbies} setSelected={setHobbies}/>
                        <NestedList data={GOALS} title={"GOALS"} selected={goal} setSelected={setGoal}/> 
                      </Grid>
                   </Grid>


                    <Button fullWidth sx={{mt:'20px'}} type="submit" variant="contained" color="success"> submit</Button>
                  

                </form>
               
              </Container>
            );
        
    } catch (error) {
        console.error('Помилка при отриманні контакту:', error);
      
        return <div className='container'>
          <h1>Error receiving contact</h1>
          <Loading/>
          </div>;
    }
}

