import '../styles/songForm.css';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';


function SongForm() {
    return (
      <div className='songForm'>
        <div>
          <label for="artist-textfield">Artist</label>
          <TextField 
            id="artist-textfield" 
            variant="outlined"
            autoComplete='off'
            slotProps={{
              input:{
                style: {
                  backgroundColor:'rgba(255, 255, 255, 0.08)', 
                  border:'2px solid rgba(255, 255, 255, 0.12)', 
                  borderRadius:'4px',
                  height: '35px',
                  color: 'rgba(255, 255, 255, 0.70)' /* Cambiar el color del texto */ 
                },
                classes: {
                  notchedOutline: 'custom-outline'
                }
              }
            }}/>
        </div>
        <div>
          <label for="song-textfield">Song</label>
          <TextField 
            id="song-textfield" 
            variant="outlined" 
            autoComplete='off'
            className='song-textfield'
            slotProps={{
              input:{
                style: {
                  backgroundColor:'rgba(255, 255, 255, 0.08)', 
                  border:'2px solid rgba(255, 255, 255, 0.12)', 
                  borderRadius:'4px',
                  height: '35px', 
                  color: 'rgba(255, 255, 255, 0.70)' /* Cambiar el color del texto */
                },
                classes: {
                  notchedOutline: 'custom-outline'
                }
              }
            }}
            />
        </div>
        <div>
          <label for="review-textfield">Review</label>
          <TextareaAutosize 
            id="review-textfield" 
            variant="outlined"
            className='custom-textarea'
                style= {{
                  height: '60px', 
                }}
            />
        </div>   
      </div>
    );
  }
  
export default SongForm;