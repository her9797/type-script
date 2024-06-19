import Styled, { styled } from "styled-components";
import ReactDOM from 'react-dom';
import React from 'react';
import Modal from 'react-modal';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { DismissFilled } from '@fluentui/react-icons';

const ModalContainer = Styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 40vw;
`;

const ModalTitleContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  background: #5E887C;
  color: white;
  padding: 5px 10px;
  align-items: center;
`;

const ButtonContainer = Styled.div`
  display:flex;
  justify-content: flex-end; 
  gap: 10px;
  margin-bottom: 10px;
`;

const FormRow = Styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 5px;
`;

const StyledInputLabel = Styled(InputLabel)`
  flex-shrink: 0;
  font-size: 12px !important;
  width: 50px; 
  margin-right: 20px; 
`;

const StyledSelect = Styled(Select)`
  flex-grow: 1;
  width: 100%;
  height: 30px;
  font-size: 12px;
`;


const StyledTextField = Styled(TextField)`
  flex-grow: 1;
  width: 100%;
  & .MuiInputBase-root {
    padding: 4px 8px;
  }
  & .MuiInputBase-input {
    height: 5px;
    font-size: 12px;
  }
`;

const StyledFormContainer = Styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

const StyledFormControl = Styled(FormControl)`
  && {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    margin-top: 20px;
    position: relative;
  }
`;

const StyledFormLabel = Styled(FormLabel)`
  && {
    position: absolute;
    top: -10px;
    left: 8px;
    background-color: white;
    padding: 0 4px;
    font-size: 12px;
  }
`;

const Label = Styled(FormLabel)`
  flex-shrink: 0;
  font-size: 12px !important; 
  width: 50px; 
  margin-right: 10px; 
`;

const StyleChecktForm = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: -13px; 
`;

const StyledCheckbox = Styled(Checkbox)`
  & .MuiSvgIcon-root {
    padding: 1px;
    width: 16px; // 체크박스 크기 조절
    height: 16px;
  }
`;

const StyledLabel = Styled.span`
  font-size: 10px; // 라벨 폰트 크기 조절
`;

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const StyledRadio = styled(Radio)`
  & .MuiSvgIcon-root {
    width: 16px;
    height: 16px;
  }
`;

const StyledFormControlLabel = Styled(FormControlLabel)`
  && {
    margin-top: -5px; 
    margin-bottom: -5px; 
  }
`;

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface PracticeModalProps {
    closeModal: () => void;
}

const PracticeModal: React.FC<PracticeModalProps> = ({ closeModal }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return ReactDOM.createPortal(
        <ModalContainer
            isOpen={true}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            <ModalTitleContainer>
                Practice Modal
                <IconButton onClick={closeModal} size="small">
                    <DismissFilled style={{ color: 'white' }} />
                </IconButton>
            </ModalTitleContainer>
            <Box sx={{ padding: 1 }}>
                <CustomTabPanel value={value} index={0}>
                    <FormGroup sx={{ gap: '10px' }}>
                        <StyledFormContainer>
                            <FormRow>
                                <StyledInputLabel>Name</StyledInputLabel>
                                <StyledTextField
                                    id="name-input"
                                    defaultValue="INNOLINC"
                                    size="small"
                                />
                            </FormRow>
                            <FormRow>
                                <StyledInputLabel id="type-select-label">Type</StyledInputLabel>
                                <StyledSelect
                                    labelId="type-select-label"
                                    id="type-select"
                                    defaultValue=""
                                    size="small"
                                >
                                    <MenuItem value="type1">Number</MenuItem>
                                    <MenuItem value="type2">Type 1</MenuItem>
                                    <MenuItem value="type3">Type 2</MenuItem>
                                </StyledSelect>
                            </FormRow>
                        </StyledFormContainer>
                        <StyledFormControl>
                            <StyledFormLabel>First Container</StyledFormLabel>
                            <div>
                                <FormRow>
                                    <Label>Desciption</Label>
                                    <StyledTextField
                                        id="name-input"
                                        defaultValue="value"
                                        size="small"
                                    />
                                </FormRow>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <StyledFormControl style={{ flex: '1', marginRight: '10px' }}>
                                    <StyledFormLabel>Title</StyledFormLabel>
                                    <RadioGroup>
                                        <FormControlLabel
                                            value="Revenue Account"
                                            control={<StyledRadio />}
                                            label={<StyledLabel>Revenue Account</StyledLabel>}
                                        />
                                        <FormControlLabel
                                            value="Balance Sheet"
                                            control={<StyledRadio />}
                                            label={<StyledLabel>Balance Sheet</StyledLabel>}
                                        />
                                    </RadioGroup>
                                </StyledFormControl>

                                <StyleChecktForm
                                    style={{ flex: '1', marginLeft: '20px', marginTop: '5px' }}
                                >
                                    <StyledFormControlLabel
                                        control={<StyledCheckbox />}
                                        label={<StyledLabel>Cumulative</StyledLabel>}
                                    />
                                    <StyledFormControlLabel
                                        control={<StyledCheckbox />}
                                        label={<StyledLabel>
                                            Cross Multiply as a Number of Policies
                                        </StyledLabel>}
                                    />
                                    <StyledFormControlLabel
                                        control={<StyledCheckbox />}
                                        label={<StyledLabel>Dynamically Calculated</StyledLabel>}
                                    />
                                    <StyledFormControlLabel
                                        control={<StyledCheckbox />}
                                        label={<StyledLabel>Dynamically Model Point</StyledLabel>}
                                    />
                                </StyleChecktForm>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                <div style={{ flex: '0 0 auto', marginRight: '10px', minWidth: '100px' }}>
                                    <Label>Default Printed Decimal Places</Label>
                                </div>
                                <div style={{ flex: '1' }}>
                                    <StyledTextField
                                        id="number-input"
                                        defaultValue="0"
                                        size="small"
                                        type="number"
                                        sx={{ width: '80px' }}
                                    />
                                </div>
                                <div style={{ flex: '0 0 auto', marginRight: '10px', minWidth: '100px' }}>
                                    <Label>Carculated By</Label>
                                </div>
                                <div style={{ flex: '1' }}>
                                    <StyledTextField
                                        id="text-input"
                                        defaultValue=""
                                        size="small"
                                        sx={{ width: '100%' }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <StyledFormControl style={{ flex: '1', marginRight: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ flexGrow: 1 }}>
                                            <StyledFormControlLabel
                                                control={<StyledCheckbox />}
                                                label={<StyledLabel>Array Variable</StyledLabel>}
                                            />
                                        </div>
                                        <div style={{ marginLeft: '10px' }}>
                                            <Button variant="outlined" size="small" sx={{ fontSize: '10px' }}>
                                                Dimensions
                                            </Button>
                                        </div>
                                    </div>
                                </StyledFormControl>

                                <StyledFormControl style={{ flex: '1', marginRight: '10px' }}>
                                    <StyledFormLabel>Title</StyledFormLabel>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ flexGrow: 1, fontSize: '12px' }}>
                                            Type: Note Defined
                                        </div>
                                        <div style={{ marginLeft: '10px' }}>
                                            <Button variant="outlined" size="small" sx={{ fontSize: '10px', padding: '4px' }}>
                                                Add / Edit
                                            </Button>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ flexGrow: 1 }}>
                                            
                                        </div>
                                        <div style={{ marginLeft: '10px' }}>
                                            <Button variant="outlined" size="small" sx={{ fontSize: '10px' }}>
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </StyledFormControl>
                            </div>
                        </StyledFormControl>
                        <FormRow>
                            <StyledInputLabel id="type-select-label">Type</StyledInputLabel>
                            <StyledSelect
                                labelId="type-select-label"
                                id="type-select"
                                defaultValue=""
                                size="small"
                            >
                                <MenuItem value="type1">Number</MenuItem>
                                <MenuItem value="type2">Type 1</MenuItem>
                                <MenuItem value="type3">Type 2</MenuItem>
                            </StyledSelect>
                        </FormRow>
                        <StyledFormControl>
                            <StyledFormLabel>Title</StyledFormLabel>
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <StyledFormControl style={{ flex: '0.2', marginRight: '10px' }}>
                                        <StyledFormLabel>Type</StyledFormLabel>
                                        <RadioGroup>
                                            <FormControlLabel
                                                value="Revenue Account"
                                                control={<StyledRadio />}
                                                label={<StyledLabel>Input</StyledLabel>}
                                            />
                                            <FormControlLabel
                                                value="Balance Sheet"
                                                control={<StyledRadio />}
                                                label={<StyledLabel>Core</StyledLabel>}
                                            />
                                        </RadioGroup>
                                    </StyledFormControl>
                                    <StyledFormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: '0.8', marginRight: '10px' }}>
                                        <div style={{ marginRight: '10px', marginTop: '10px' }}>
                                            <Label style={{fontSize: '10px'}}>Variable Code</Label>
                                        </div>
                                        <div style={{ marginTop: '10px', maxWidth: '130px' }}>
                                            <StyledTextField
                                                id="text-input"
                                                defaultValue=""
                                                size="small"
                                                sx={{ width: '100%' }}
                                            />
                                        </div>
                                    </StyledFormControl>
                                    <div style={{ display: 'flex', flexDirection: 'column', flex: '0.5' }}>
                                        <div style={{ marginBottom: '10px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginTop: '10px' }}>
                                                <Label>Modified</Label>
                                                <div style={{ flex: '0.5', marginTop: '10px', maxWidth: '80px' }}>
                                                    <StyledTextField
                                                        id="text-input"
                                                        defaultValue=""
                                                        size="small"
                                                        sx={{ width: '100%' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginTop: '10px' }}>
                                                <Label>Modified By</Label>
                                                <div style={{ flex: '1', marginTop: '10px', maxWidth: '80px' }}>
                                                    <StyledTextField
                                                        id="text-input"
                                                        defaultValue=""
                                                        size="small"
                                                        sx={{ width: '100%' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginTop: '10px' }}>
                                                <Label>Book</Label>
                                                <div style={{ flex: '1', marginTop: '10px', maxWidth: '80px' }}>
                                                    <StyledSelect
                                                        labelId="type-select-label"
                                                        id="type-select-book"
                                                        defaultValue="<None>"
                                                        size="small"
                                                    >
                                                        <MenuItem value="type1">None</MenuItem>
                                                        <MenuItem value="type2">Type 1</MenuItem>
                                                        <MenuItem value="type3">Type 2</MenuItem>
                                                    </StyledSelect>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <StyledFormControl>
                                <StyledFormLabel>WorkSpaece Tags</StyledFormLabel>
                                <div>
                                    <FormRow>
                                        <Label>Add</Label>
                                    </FormRow>
                                </div>
                            </StyledFormControl>
                        </StyledFormControl>
                    </FormGroup>
                </CustomTabPanel>

                <ButtonContainer>
                    <Button variant="outlined" size="medium">
                        OK
                    </Button>
                    <Button variant="outlined" size="medium">
                        Cancel
                    </Button>
                    <Button variant="outlined" size="medium">
                        Help
                    </Button>
                </ButtonContainer>
            </Box>
        </ModalContainer>, document.body
    );
}

export default PracticeModal;