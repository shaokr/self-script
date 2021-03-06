/* eslint no-var: "off", prefer-arrow-callback: "off" */
/**
 * 中文语言包
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
    Success: '操作成功',
    HadDepart: '现有部门',
    ChoicedDepart: '已选部门',
    OrderSendSuccess: '命令发送成功',
    DelLocationDataSuccess: '删除本地数据成功',
    NoData: '没有数据',
    CheckingHistoryRecord: '正在检查历史登录设备',
    LoginedEquip: '登录过的设备',
    EquipName: '设备名：',
    LatestState: '最新状态',
    NeverLogin: '尚未登录过任何移动设备',
    Refresh: '刷新',
    LoadingFailAndCheck: '加载失败，请检查网络',
    TryAgain: '重试',
    NeverLoginUserClearLocationDataOut:
      '未登录状态的设备会在用户登录后立刻清除设备本地数据后强制退出',
    EditMemMsg: '编辑员工信息',
    InputPosName: '请输入职位名',
    NewPsd: '新密码',
    InputPsd: '请输入密码',
    PsdFormat: '密码格式错误',
    ConfirmPsd: '确认密码',
    InputAgain: '请再次输入',
    PsdDifference: '密码输入不一致',
    FormatError: '格式输入错误',
    ChoiceDepart: '请选择部门',
    EnglishNameFormatError: '英文名格式错误',
    MobileFormatError: '手机号格式不正确',
    LandlineFormatError: '座机号格式不正确',
    AccountFormatError: '帐号格式不正确',
    PosFormatError: '职位名格式不正确',
    ServiceError: '服务器错误',
    Name: '姓名',
    NameFoematError: '姓名格式不正确',
    InputName: '请填写姓名',
    Depart: '部门',
    DepartChoice: '选择部门',
    InputDepart: '请输入部门',
    PosName: '职位名',
    EnglishName: '英文名',
    Gender: '性别',
    Man: '男',
    Female: '女',
    MobileNum: '手机号',
    Email: '邮箱',
    EmailFormatError: '邮箱格式不正确',
    AdviceCorpEamil: '建议使用组织邮箱',
    Landline: '座机号',
    AccountIsSign:
      '帐号是成员在组织内的唯一标识，可以使用工号、手机号、邮箱等公司系统内统一的ID，设置后可使用该帐号登陆',
    JobNumMobileAsID: '可以使用工号、手机号、邮箱等统一的ID',
    LoginPsd: '登录密码',
    DefaultPsd: '默认密码为11111111',
    ResetPsd: '重置密码',
    JobNum: '工号',
    MemJobNum: '员工工号',
    MemRole: '成员角色',
    SaveAndAdd: '保存并继续添加',
    Save: '保存',
    Cancel: '取消',
    Back: '返回',
    StopUse: '停用',
    AccountStopped: '账号已被停用',
    Delete: '删除',
    DelConfirm: '删除确认',
    NowDepartDel: '若该成员属于多部门，则只将该成员从本部门中移除。',
    DelRecordDel: '删除后，成员的消息记录将被完全清除。',
    DepartLimit: '部门名称不能超过32个字符',
    NotDelDepart: '当前部门存在成员，不可删除',
    NoChoicedDepart: '未选中任何部门',
    DepartFormatError: '部门名称格式不正确',
    SetDepart: '设置部门',
    AddChildDepart: '添加子部门',
    DelDepart: '删除部门',
    DepartName: '部门名称',
    BuildGroupLimit:
      '创建部门群，方便部门内交流，群上限为1000人，超过1000人后无法加入',
    ConfirmDel: '确认删除',
    FileSizeLimit: '文件不超过1M',
    FileUpLoadSuccess: '文件上传成功',
    FileUploadFail: '文件上传失败',
    BatchImportMem: '批量导入成员',
    FileUpload: '文件上传',
    ImportFile: '导入文件',
    FinishImport: '完成导入',
    ImportExplain: '导入说明：文件必须为xls或xlsx格式',
    DownloadTemplate: '下载示例模板',
    UploadRegion: '将文件上传到此区域',
    UploadFile: '上传文件',
    UploadingPeople: '正在导入第$0人',
    AddImportPeople: '新增导入$0人,导入失败$1人',
    ImportedLoginCheck:
      '已导入的成员可直接登陆，如未设置成员帐号密码，可在成员详情中查看',
    DownloadFailMemList: '下载失败成员列表',
    CheckImportedMem: '查看最近添加成员',
    NoChoicedMem: '未选中任何成员',
    ChoiceOne: '请选中一个成员',
    NoChoicedEquip: '没有选中任何设备',
    AddMem: '添加成员',
    MoveMem: '移动成员至',
    AdjustOrder: '调整排序',
    DelEquipLoginDelLocationData:
      '当需要删除数据的设备连接网络，且登录时，系统会强制主动删除设备上的本地数据。',
    DataForceDel: '数据强删除',
    FinishSaveSet: '完成操作后请保存设置',
    Revoke: '撤销',
    ConfirmStopUse: '停用确认',
    StopNotUse: '停用后，成员的帐号将无法登陆使用，是否确认继续停用？',
    DelLocationData: '删除本地数据',
    Tips: '提示',
    ForceDelLocationData: '是否确认强制删除已选设备的本地数据？',
    TipLoginDelLocationData:
      '注：将会在用户登录后立刻清除设备本地数据后强制用户退出登录。',
    Account: '帐号',
    Position: '职务',
    Phone: '手机',
    DepartNoMem: '该部门没有成员',
    Edit: '编辑',
    StartUse: '启用',
    Oprate: '操作',
    New: '新',
    Admin: '管理员',
    DepartAdmin: '部门管理员',
    SuperAdmin: '超级管理员',
    OrdinaryUser: '普通用户',
    BusinessCardSet: '名片设置',
    AddCustoomField: '添加自定义字段',
    AddType: '新增分类',
    FieldName: '名称',
    InputCustomName: '请输入自定义字段名称',
    InputAreaName: '请输入分类名称',
    LimitInput: '最多输入20个字符',
    PreshowClient: '预览客户端展示效果',
    BusinessCardShow: '名片信息展示',
    LongPressDrag: '长按拖动图标可进行拖动，不支持跨区块内容拖动',
    Show: '展示',
    Editable: '可编辑',
    NoFeildAddCustom: '暂无字段内容，请添加自定义字段',
    DetailData: '详细资料',
    DragFail: '拖动失败',
    ConformDelCustom: '确认删除该分类吗',
    ConfirmDelMsg: '确认删除后，组织内成员的',
    FieldDel: '字段数据将会被删除',
    AllStopMems: '所有停用帐号',
    StopedAccountList: '已停用帐号列表',
    FinishOrder: '完成排序',
    Sure: '确定',
    InputInteger: '请输入一个大于0的整数',
    EditFieldName: '编辑分类名称',
    Configure: '配置',
    Order: '排序',
    DelFieldFirstThenArea: '请先删除区域名称下的所有字段后在删除该区域',
    FrontStatus: '前端状态',
    ShowBorder: '显示分割线',
    Visible: '显示',
    AddAreaLimit: '最多添加20个',
    NameNoEmpty: '名称不能为空',
    NoCrossArea: '不支持跨区块内容拖动',
    CustomField: '自定义字段',
    InputIllegal: '输入不合法',
    InputOverSix: '输入超过600个字',
    DissoluteDepartGroup: '解散部门群',
    DissoluteDGConfirm:
      '部门群已存在，是否确认解散该部门群？解散后将删除群聊天记录。',
    KeyTip: '字段唯一标识（非必填），4-12位数字或小写英文',
    keyLimitTip: '输入不合法，key为4-12位数字或小写英文',
    SearchPlaceholder: '搜索成员',
    Members: '成员:',
    Deps: '部门:',
    NoSearchRes: '无搜索结果'
  };
});
