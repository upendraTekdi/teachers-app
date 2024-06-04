import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';

import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import { useTheme, withStyles } from '@mui/material/styles';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import user_placeholder from '../assets/images/user_placeholder.png';
import userPicture from '@/assets/images/imageOne.jpg';
import Header from '@/components/Header';
import { editEditUser, getUserDetails } from '@/services/ProfileService';
import { CustomField, UserDatas, updateCustomField } from '@/utils/Interfaces';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { getLabelForValue } from '@/utils/Helper';
import Loader from '@/components/Loader';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

interface FieldOption {
  name: string;
  label: string;
  value: string;
  order: string;
}

interface UserData {
  name: string;
}

interface EditFormProps {
  userData: UserData;
  customFieldsData: CustomField[];
  updateUser: (payload: any) => void;
}

const TeacherProfile = () => {
  const user_placeholder_img: string = user_placeholder.src;

  const { t } = useTranslation();
  const router = useRouter();
  const theme = useTheme<any>();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userData, setUserData] = useState<any | null>(null);
  const [userName, setUserName] = useState<any | null>(null);
  const [updatedCustomFields, setUpdatedCustomFields] = useState<any>([]);
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dropdownValues, setDropdownValues] = useState<any>({});
  const [customFieldsData, setCustomFieldsData] = useState<CustomField[]>([]);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(user_placeholder_img);
  const [gender, setGender] = React.useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [unitName, setUnitName] = useState('');
  const [blockName, setBlockName] = useState('');
  const [radioValues, setRadioValues] = useState<any>([]);

  const handleNameFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserName(value);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    maxWidth: 300, // Maximum width for responsiveness
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isDesktop ? 700 : 400,
    bgcolor: theme.palette.warning.A400,
    p: 4,
    textAlign: 'center',
    '@media (max-width: 768px)': {
      width: '95%', // Adjust width for smaller screens
      padding: '15px', // Adjust padding for smaller screens
    },
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
      } else {
        router.push('/login');
      }
    }
  }, []);

  // find Address
  const getFieldValue = (data: any, label: string) => {
    const field = data.find((item: any) => item.label === label);
    return field ? field.value[0] : null;
  };

  const fetchUserDetails = async () => {
    setLoading(true);
    if (typeof window !== 'undefined' && window.localStorage) {
      const userId = localStorage.getItem('userId');

      try {
        if (userId) {
          const response = await getUserDetails(userId, true);

          const data = response?.result;

          if (data) {
            const userData = data?.userData;

            setUserData(userData);
            setUserName(userData?.name);
            const customDataFields = userData?.customFields;
            if (customDataFields?.length > 0) {
              setCustomFieldsData(customDataFields);

              const unitName = getFieldValue(customDataFields, 'Unit Name');
              setUnitName(unitName);
              const blockName = getFieldValue(customDataFields, 'Block Name');
              setBlockName(blockName);
              setLoading(false);
            }
          } else {
            console.log('No data Found');
          }
        }
      } catch (error) {
        setLoading(false);
        console.error('Error fetching  user details:', error);
      }
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleClickImage = () => {
    fileInputRef.current && fileInputRef.current.click();
  };

  const handleImageUpload = (e: any) => {
    const image: any[] = [e.target.files[0]];
    const newImageUrl: any = [];
    image.forEach((dataImage: any) =>
      newImageUrl.push(URL.createObjectURL(dataImage))
    );
    setImage(newImageUrl);
  };

  // Find fields for "Subjects I Teach" and "My Main Subjects"
  const teachSubjectsField = customFieldsData?.find(
    (field) => field.name === 'subject_taught'
  );
  const mainSubjectsField = customFieldsData?.find(
    (field) => field.name === 'main_subject'
  );

  const teachSubjects: string[] = Array.isArray(teachSubjectsField?.value)
    ? teachSubjectsField?.value
    : [];
  const mainSubjects: string[] = Array.isArray(mainSubjectsField?.value)
    ? mainSubjectsField?.value
    : [];

  // Find mutual and remaining subjects
  const mutualSubjects = teachSubjects?.filter((subject) =>
    mainSubjects?.includes(subject)
  );
  const remainingSubjects = teachSubjects?.filter(
    (subject) => !mainSubjects?.includes(subject)
  );
  const orderedSubjects = [...mutualSubjects, ...remainingSubjects];

  // Function to get label for a subject from the options array
  const getLabelForSubject = (subject: string) => {
    const option = teachSubjectsField?.options?.find(
      (opt: any) => opt.value === subject
    );
    return option ? option.label : subject;
  };

  //fields  for view profile by order
  const filteredSortedForView = [...customFieldsData]
    ?.filter((field) => field.order !== 0 && field.name !== 'main_subject')
    ?.sort((a, b) => a.order - b.order);

  //fields  for edit popup by order
  const filteredSortedForEdit = [...customFieldsData]
    ?.filter((field) => field.order !== 0 && field.isEditable)
    ?.sort((a, b) => a.order - b.order);

  // fields for showing in  basic details
  const getLabelForValue = (field: any, value: string) => {
    if (
      field.type === 'radio' ||
      field.type === 'Radio' ||
      field.type === 'Drop Down' ||
      field.type === 'dropdown'
    ) {
      const option = field?.options?.find((opt: any) => opt?.value === value);
      return option ? option?.label : value;
    }
    return value;
  };

  // address find
  const address = [unitName, blockName, userData?.district, userData?.state]
    ?.filter(Boolean)
    ?.join(', ');

  //------------edit teacher profile------------

  const [formData, setFormData] = useState<{
    userData: UserDatas;
    customFields: { fieldId: string; type: string; value: string[] | string }[];
  }>({
    userData: {
      name: userName || '',
      district: '',
      state: '',
      mobile: '',
    },
    customFields: customFieldsData?.map((field) => ({
      fieldId: field.fieldId,
      type: field.type,
      value: field.value ? field.value : '',
    })),
  });

  useEffect(() => {
    setFormData({
      userData: {
        name: userName || '',
        district: '',
        state: '',
        mobile: '',
      },
      customFields: customFieldsData.map((field) => ({
        fieldId: field.fieldId,
        type: field.type,
        value: field.value ? field.value : '',
      })),
    });
  }, [userData, customFieldsData]);

  const handleFieldChange = (fieldId: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      customFields: prevState.customFields.map((field) =>
        field.fieldId === fieldId ? { ...field, value: [value] } : field
      ),
    }));
  };

  const handleCheckboxChange = (
    fieldId: string,
    optionName: string,
    isChecked: boolean
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      customFields: prevState.customFields.map((field) =>
        field.fieldId === fieldId
          ? {
              ...field,
              value: isChecked
                ? [...(field.value as string[]), optionName]
                : (field.value as string[]).filter(
                    (item) => item !== optionName
                  ),
            }
          : field
      ),
    }));
  };

  const handleDropdownChange = (fieldId: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      customFields: prevState.customFields.map((field) =>
        field.fieldId === fieldId ? { ...field, value: [value] } : field
      ),
    }));
  };

  const handleRadioChange = (fieldId: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      customFields: prevState.customFields.map((field) =>
        field.fieldId === fieldId ? { ...field, value: [value] } : field
      ),
    }));
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    const userId = localStorage.getItem('userId');
    const data = {
      userData: formData?.userData,
      customFields: formData?.customFields?.map((field) => ({
        fieldId: field.fieldId,
        // type: field.type,
        value: Array.isArray(field?.value)
          ? field?.value?.length > 0
            ? field?.value
            : ''
          : field?.value,
      })),
    };
    let userDetails = data;
    try {
      if (userId) {
        const response = await editEditUser(userId, userDetails);

        if (response.responseCode !== 200 || response.params.err) {
          throw new Error(
            response.params.errmsg ||
              'An error occurred while updating the user.'
          );
        }

        handleClose();

        console.log(response.params.successmessage);
        fetchUserDetails();
        setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    console.log('payload', data);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        minWidth={'100%'}
      >
        <Header />
        {loading && (
          <Loader showBackdrop={true} loadingText={t('COMMON.LOADING')} />
        )}
        <Box
          display="flex"
          flexDirection="column"
          padding={2}
          gap={'10px'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            sx={{ flex: '1', minWidth: '100%' }}
            display="flex"
            flexDirection="row"
            gap="5px"
          >
            <Typography
              variant="h3"
              style={{
                letterSpacing: '0.1px',
                textAlign: 'left',
                marginBottom: '2px',
              }}
              fontSize={'22px'}
              fontWeight={'400'}
              lineHeight={'28px'}
            >
              {t('PROFILE.MY_PROFILE')}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: '1',
              border: '2px solid',
              borderColor: theme.palette.warning['A100'],
            }}
            minWidth={'100%'}
            borderRadius={'12px'}
            border={'1px'}
            bgcolor={theme.palette.warning.A400}
            display="flex"
            flexDirection="row"
          >
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Box m={2}>
                  <Image
                    src={user_placeholder_img}
                    alt="user"
                    width={100}
                    height={100}
                  />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Typography
                    ml={0.5}
                    fontSize={'16px'}
                    lineHeight={'16px'}
                    fontWeight={'500'}
                  >
                    <br />

                    {userData?.name}
                  </Typography>
                </Box>
                <Box display={'flex'} mt={'3px'}>
                  {address ? (
                    <PlaceOutlinedIcon
                      sx={{
                        fontSize: '1rem',
                        marginTop: '1px',
                        fontWeight: '11.7px',
                        height: '14.4px',
                      }}
                    />
                  ) : (
                    ''
                  )}

                  <Typography
                    margin={0}
                    color={theme.palette.warning.A200}
                    fontSize={'12px'}
                    fontWeight={'500'}
                    lineHeight={'16px'}
                  >
                    {address}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Button
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              minWidth: '100%',
              padding: '10px 24px 10px 16px',
              gap: '8px',
              borderRadius: '100px',
              marginTop: '10px',
              flex: '1',
              textAlign: 'center',
              color: theme.palette.warning.A200,
              border: `1px solid ${theme.palette.warning.A200}`,
              borderColor: theme.palette.warning['A100'],
            }}
            onClick={handleOpen}
          >
            <Typography
              variant="h3"
              style={{
                letterSpacing: '0.1px',
                textAlign: 'left',
                marginBottom: '2px',
              }}
              fontSize={'14px'}
              fontWeight={'500'}
              lineHeight={'20px'}
            >
              {t('PROFILE.EDIT_PROFILE')}
            </Typography>
            <Box>
              <CreateOutlinedIcon sx={{ fontSize: '14px' }} />
            </Box>
          </Button>

          {/* modal for edit profile */}
          <Box
            sx={{
              flex: '1',
              // textAlign: 'center',
              border: '2px solid',
              borderColor: theme.palette.warning['A100'],
              padding: '10px',
            }}
            minWidth={'100%'}
            borderRadius={'12px'}
            border={'1px'}
            display="flex"
            flexDirection="row"
          >
            <Grid container spacing={4}>
              {filteredSortedForView?.map((item, index) => {
                if (item.order === 5) {
                  return (
                    <Grid item xs={12}>
                      <Typography
                        fontSize={'12px'}
                        fontWeight={'600'}
                        margin={0}
                        lineHeight={'16px'}
                        letterSpacing={'0.5px'}
                      >
                        {item?.label && item.name
                          ? t(`FIELDS.${item.name.toUpperCase()}`, item.label)
                          : item.label}
                        {/* {item?.label} */}
                      </Typography>
                      <Box
                        mt={2}
                        sx={{
                          display: 'flex',
                          gap: '10px',
                          flexWrap: 'wrap',
                        }}
                      >
                        {orderedSubjects &&
                          orderedSubjects?.map((subject, index) => (
                            <Button
                              key={index}
                              size="small"
                              variant={
                                mainSubjects?.includes(subject)
                                  ? 'contained'
                                  : 'outlined'
                              }
                              sx={{
                                backgroundColor: mainSubjects?.includes(subject)
                                  ? theme.palette.info.contrastText
                                  : 'none',
                                borderRadius: '8px',
                                color: theme.palette.warning.A200,
                                whiteSpace: 'nowrap',
                                boxShadow: 'none',
                                border: `1px solid ${theme.palette.warning[900]}`,
                                pointerEvents: 'none',
                              }}
                            >
                              {getLabelForSubject(subject)}
                              {/* {subject} */}
                            </Button>
                          ))}
                      </Box>
                    </Grid>
                  );
                } else if (item.order === 7) {
                  return (
                    <Grid item xs={12} key={index}>
                      <Typography
                        variant="h4"
                        margin={0}
                        lineHeight={'16px'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        letterSpacing={'0.5px'}
                      >
                        {item?.label && item.name
                          ? t(`FIELDS.${item.name.toUpperCase()}`, item.label)
                          : item.label}
                        {/* {item.label} */}
                      </Typography>
                      <Typography
                        variant="h4"
                        margin={0}
                        color={theme.palette.warning.A200}
                      >
                        {item.value}
                      </Typography>
                    </Grid>
                  );
                } else {
                  return (
                    <Grid item xs={6} key={index}>
                      <Typography
                        variant="h4"
                        margin={0}
                        lineHeight={'16px'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        letterSpacing={'0.5px'}
                      >
                        {item?.label && item.name
                          ? t(`FIELDS.${item.name.toUpperCase()}`, item.label)
                          : item.label}
                        {/* {item.label} */}
                      </Typography>
                      <Typography
                        variant="h4"
                        margin={0}
                        color={theme.palette.warning.A200}
                      >
                        {getLabelForValue(item, item.value[0])}
                      </Typography>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="edit-profile-modal"
            aria-describedby="edit-profile-description"
          >
            <Box
              sx={style}
              gap="10px"
              display="flex"
              flexDirection="column"
              borderRadius={'1rem'}
            >
              {loading && (
                <Loader showBackdrop={true} loadingText={t('COMMON.LOADING')} />
              )}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Typography
                  variant="h2"
                  style={{
                    textAlign: 'left',
                    color: theme.palette.warning.A200,
                  }}
                >
                  {t('PROFILE.EDIT_PROFILE')}
                </Typography>

                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                  style={{
                    justifyContent: 'flex-end',
                  }}
                >
                  <CloseIcon cursor="pointer" />
                </IconButton>
              </Box>
              <Box
                style={{
                  overflowY: 'auto',
                }}
                id="modal-modal-description"
              >
                <Box
                  sx={{
                    flex: '1',
                    textAlign: 'center',
                    marginLeft: '5%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  borderRadius={'12px'}
                  border={'1px'}
                  bgcolor={theme.palette.warning.A400}
                  display="flex"
                  flexDirection="column"
                >
                  <Image
                    src={user_placeholder_img}
                    alt="user"
                    height={100}
                    width={100}
                    style={{ alignItems: 'center' }}
                  />

                  <Box>
                    <input
                      id=""
                      type="file"
                      multiple
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                    <Button
                      sx={{
                        minWidth: '100%',
                        padding: '10px 24px 10px 16px',
                        borderRadius: '12px',
                        marginTop: '10px',
                        flex: '1',
                        textAlign: 'center',
                        border: '1px solid ',
                      }}
                      disabled // commment for temp
                      onClick={handleClickImage}
                    >
                      {t('PROFILE.UPDATE_PICTURE')}
                    </Button>
                  </Box>
                </Box>
                <TextField
                  sx={{ marginTop: '20px' }}
                  fullWidth
                  name="name"
                  label={t('PROFILE.FULL_NAME')}
                  variant="outlined"
                  value={formData.userData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      userData: {
                        name: e.target.value,
                        district: '',
                        state: '',
                        mobile: '',
                      },
                    })
                  }
                />

                {customFieldsData
                  ?.filter((field) => field.isEditable)
                  ?.sort((a, b) => a.order - b.order)
                  ?.map((field) => (
                    <Grid item xs={12} key={field.fieldId}>
                      {field.type === 'text' || field.type === 'numeric' ? (
                        <TextField
                          sx={{ marginTop: '20px' }}
                          fullWidth
                          name={field.name}
                          // label={field.label}
                          label={
                            field?.label && field.name
                              ? t(
                                  `FIELDS.${field.name.toUpperCase()}`,
                                  field.label
                                )
                              : field.label
                          }
                          variant="outlined"
                          value={
                            formData?.customFields?.find(
                              (f) => f.fieldId === field.fieldId
                            )?.value[0] || ''
                          }
                          onChange={(e) =>
                            handleFieldChange(field.fieldId, e.target.value)
                          }
                        />
                      ) : field.type === 'checkbox' ? (
                        <Box marginTop={3}>
                          <Typography
                            textAlign={'start'}
                            variant="h4"
                            margin={0}
                            color={theme.palette.warning.A200}
                          >
                            {field?.label && field.name
                              ? t(
                                  `FIELDS.${field.name.toUpperCase()}`,
                                  field.label
                                )
                              : field.label}
                            {/* {field.label} */}
                          </Typography>
                          {field.options?.map((option: any) => (
                            <FormGroup key={option.value}>
                              <FormControlLabel
                                sx={{ color: theme.palette.warning[300] }}
                                control={
                                  <Checkbox
                                    color="default"
                                    checked={(
                                      formData?.customFields.find(
                                        (f) => f.fieldId === field.fieldId
                                      )?.value || []
                                    )?.includes(option.value)}
                                    onChange={(e) =>
                                      handleCheckboxChange(
                                        field.fieldId,
                                        option.value,
                                        e.target.checked
                                      )
                                    }
                                  />
                                }
                                label={option.label}
                              />
                            </FormGroup>
                          ))}
                        </Box>
                      ) : field.type === 'Drop Down' ||
                        field.type === 'dropdown' ? (
                        <Box marginTop={3} textAlign={'start'}>
                          <FormControl fullWidth>
                            <InputLabel id={`select-label-${field.fieldId}`}>
                              {field?.label && field.name
                                ? t(
                                    `FIELDS.${field.name.toUpperCase()}`,
                                    field.label
                                  )
                                : field.label}
                              {/* {field.label} */}
                            </InputLabel>
                            <Select
                              labelId={`select-label-${field.fieldId}`}
                              id={`select-${field.fieldId}`}
                              value={
                                formData?.customFields?.find(
                                  (f) => f.fieldId === field.fieldId
                                )?.value[0] || ''
                              }
                              // label={field.label}
                              label={
                                field?.label && field.name
                                  ? t(
                                      `FIELDS.${field.name.toUpperCase()}`,
                                      field.label
                                    )
                                  : field.label
                              }
                              onChange={(e) =>
                                handleDropdownChange(
                                  field.fieldId,
                                  e.target.value
                                )
                              }
                            >
                              {field?.options?.map((option: any) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      ) : field.type === 'radio' || field.type === 'Radio' ? (
                        <Box marginTop={3}>
                          <Typography
                            textAlign={'start'}
                            variant="h4"
                            margin={0}
                            color={theme.palette.warning.A200}
                          >
                            {field?.label && field.name
                              ? t(
                                  `FIELDS.${field.name.toUpperCase()}`,
                                  field.label
                                )
                              : field.label}
                            {/* {field.label} */}
                          </Typography>
                          <RadioGroup
                            name={field.fieldId}
                            value={
                              formData?.customFields?.find(
                                (f) => f.fieldId === field.fieldId
                              )?.value[0] || ''
                            }
                            onChange={(e) =>
                              handleRadioChange(field.fieldId, e.target.value)
                            }
                          >
                            <Box
                              display="flex"
                              flexWrap="wrap"
                              color={theme.palette.warning.A200}
                            >
                              {field?.options?.map((option: any) => (
                                <FormControlLabel
                                  key={option.value}
                                  value={option.value}
                                  control={<Radio color="default" />}
                                  label={option.label}
                                />
                              ))}
                            </Box>
                          </RadioGroup>
                        </Box>
                      ) : null}
                    </Grid>
                  ))}
                <Box></Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                  sx={{
                    minWidth: '100%',
                    color: theme.palette.warning.A200,
                    boxShadow: 'none',
                  }}
                  onClick={handleSubmit}
                  variant="contained"
                >
                  {t('COMMON.SAVE')}
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default TeacherProfile;
