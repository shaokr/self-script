/* eslint no-var: "off", prefer-arrow-callback: "off" */
/**
 * Chinese language package
 */
(function(f) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = f();
  } else if (typeof define === 'function' && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== 'undefined') {
      g = window;
    } else if (typeof global !== 'undefined') {
      g = global;
    } else if (typeof self !== 'undefined') {
      g = self;
    } else {
      g = this;
    }
    g.lang = f();
  }
})(function() {
  return {
    Success: 'Successful operation', // Example
    HadDepart: 'Existing department',
    ChoicedDepart: 'Selected department',
    OrderSendSuccess: 'Order sent successfully',
    DelLocationDataSuccess: 'Local data is deleted successfully',
    NoData: 'No data',
    CheckingHistoryRecord: 'Checking history login device',
    LoginedEquip: 'Logined device',
    EquipName: 'Device name:',
    LatestState: 'Latest state',
    NeverLogin: 'has not logged in to any mobile device',
    Refresh: 'Refresh',
    LoadingFailAndCheck:
      'Loading failed, please check your Internet connection',
    TryAgain: 'Try again',
    NeverLoginUserClearLocationDataOut:
      'For devices not logged in, local data on the device will be cleared immediately after the user logs in and then the user will be forcibly logged out.',
    EditMemMsg: 'Edit employee information',
    InputPosName: 'Please enter job title',
    NewPsd: 'New password',
    InputPsd: 'Please enter password',
    PsdFormat: 'Password format error',
    ConfirmPsd: 'Re-enter Password',
    InputAgain: 'Please enter again',
    PsdDifference: 'Passwords do not match',
    FormatError: 'Format input error',
    ChoiceDepart: 'Please select department',
    EnglishNameFormatError: 'English name format error',
    MobileFormatError: 'Phone number format incorrect',
    LandlineFormatError: 'Landline number format incorrect',
    AccountFormatError: 'Account format incorrect',
    PosFormatError: 'Job title format incorrect',
    ServiceError: 'Server error',
    Name: 'Name',
    NameFoematError: 'Name format incorrect',
    InputName: 'Please fill in your name',
    Depart: 'Department',
    DepartChoice: 'Select department',
    InputDepart: 'Please enter the department',
    PosName: 'Job title',
    EnglishName: 'English name',
    Gender: 'Gender',
    Man: 'Male',
    Female: 'Female',
    MobileNum: 'Mobile number',
    Email: 'Mail',
    EmailFormatError: 'Email format incorrect',
    AdviceCorpEamil: 'It is recommended to use corporation email',
    Landline: 'Landline number',
    AccountIsSign:
      'An account is the only identity of a member within the organization. It can be a uniform ID within the company system such as the job number, mobile phone number, and email address. After setting the account, it can be used to log in',
    JobNumMobileAsID:
      'It can be a uniform ID such as the job number, mobile phone number, and email address, etc.',
    LoginPsd: 'Login password',
    DefaultPsd: 'Default password is 11111111',
    ResetPsd: 'Reset password',
    JobNum: 'Job No.',
    MemJobNum: 'Employee job number',
    MemRole: 'Member role',
    SaveAndAdd: 'Save and continue adding',
    Save: 'Save',
    Cancel: 'Cancel',
    Back: 'Return',
    StopUse: 'Disabled',
    Delete: 'Delete',
    DelConfirm: 'Delete confirmation',
    NowDepartDel:
      'If a member serves several departments, the member is removed from the department.',
    DelRecordDel:
      "After removal, the member's message records will be completely cleared.",
    NotDelDepart: 'The department has members and it cannot be deleted',
    NoChoicedDepart: 'No departments are selected',
    DepartFormatError: 'Department name format incorrect',
    SetDepart: 'Set department',
    AddChildDepart: 'Add sub-department',
    DelDepart: 'Delete department',
    DepartName: 'Department name',
    BuildGroupLimit:
      'Create a department group to facilitate communication within the department, the limit to the number of group members is 1,000 people, and no more can join the group when group members reach 1,000',
    ConfirmDel: 'Delete',
    FileSizeLimit: 'The file does not exceed 1M',
    FileUpLoadSuccess: 'The file is uploaded successfully',
    FileUploadFail: 'File uploading failed',
    BatchImportMem: 'Batch import members',
    FileUpload: 'File upload',
    ImportFile: 'Import file',
    FinishImport: 'Finish importing',
    ImportExplain:
      'Import instructions: The file must be in xls or xlsx format',
    DownloadTemplate: 'Download template',
    UploadRegion: 'Upload file to this area',
    UploadFile: 'Upload file',
    UploadingPeople: 'Importing $0 person(s)',
    AddImportPeople: 'Import $0 new person(s), fail to import $1 person(s)',
    ImportedLoginCheck:
      'Imported members can log in directly. If account and password are not set, they can be viewed in the member details',
    DownloadFailMemList: 'List of members failing to download',
    CheckImportedMem: 'View recently added members',
    NoChoicedMem: 'No members are selected',
    ChoiceOne: 'Please select a member',
    NoChoicedEquip: 'No devices are selected',
    AddMem: 'Add member',
    MoveMem: 'Move members to',
    AdjustOrder: 'Adjust order',
    DelEquipLoginDelLocationData:
      'When the device that needs to delete data is connected to the network and it is logged in, the system will automatically delete the local data on the device.',
    DataForceDel: 'Data is deleted forcibly',
    FinishSaveSet: 'Please save settings after completing the operation',
    Revoke: 'Cancel',
    ConfirmStopUse: 'Deactivation confirmation',
    StopNotUse:
      'After deactivation, the member will be unable to log in to the account. Are you sure to continue deactivating?',
    DelLocationData: 'Delete local data',
    Tips: 'Prompt',
    ForceDelLocationData:
      'Are you sure to forcibly delete the local data on the selected device?',
    TipLoginDelLocationData:
      'Note: Local data on the device will be cleared immediately after the user logs in and then the user will be forcibly logged out.',
    Account: 'Account No.',
    Position: 'Title',
    Phone: 'Mobile phone',
    DepartNoMem: 'The department has no members',
    Edit: 'Edit',
    StartUse: 'Enable',
    Oprate: 'Operation',
    New: 'New',
    Admin: 'Administrator',
    OrdinaryUser: 'Ordinary user',
    BusinessCardSet: 'Business card setting',
    AddCustoomField: 'Add custom fields',
    AddType: 'New category',
    FieldName: 'Name',
    InputCustomName: 'Please enter a custom field name',
    InputAreaName: 'Please enter a category name',
    LimitInput: 'Enter 20 characters at most',
    PreshowClient: 'Preview client-side display effect',
    BusinessCardShow: 'Business card information display',
    LongPressDrag:
      'Press and hold on the icon to drag it, cross-block content dragging is not supported',
    Show: 'Show',
    Editable: 'Editable',
    NoFeildAddCustom: 'No fields, please add custom fields',
    DetailData: 'Detailed data',
    DragFail: 'Dragging failed',
    ConformDelCustom: 'Are you sure to delete this category?',
    ConfirmDelMsg: 'After confirming the deletion, members’',
    FieldDel: 'field data will be deleted',
    AllStopMems: 'All disabled accounts',
    StopedAccountList: 'List of disabled accounts',
    FinishOrder: 'Finish sorting',
    Sure: 'Ok',
    InputInteger: 'Please enter an integer greater than 0',
    EditFieldName: 'Edit category name',
    Configure: 'Configuration',
    Order: 'Sequence',
    DelFieldFirstThenArea:
      'Please delete all fields under the area name before deleting the area',
    FrontStatus: 'Front status',
    ShowBorder: 'Show divider',
    Visible: 'Display',
    AddAreaLimit: 'Add 20 at most',
    NameNoEmpty: 'Empty name is not allowed',
    NoCrossArea: 'Cross-block content dragging is not supported',
    CustomField: 'Custom field',
    InputIllegal: 'Invalid input',
    InputOverSix: 'Enter more than 600 words',
    DissoluteDepartGroup: 'Dissolve department group',
    DissoluteDGConfirm:
      'The department group already exists. Are you sure to dissolve it? Chat history will be deleted when the group is dissolved.',
    KeyTip:
      'Field unique identifier（Not Necessary），4-12 numbers or lowercase English',
    keyLimitTip: 'Input error，key is 4-12 numbers or lowercase English',
    SearchPlaceholder: 'Search members',
    Members: 'Members:',
    Deps: 'Departments:',
    NoSearchRes: 'NO result'
  };
});
