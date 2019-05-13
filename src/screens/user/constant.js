/**
 * @author vishwadeep.kapoor
 * @Date: 2019-04-16 20:16:26
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-05-03 23:51:26
 */
export const HOME_LIST_DATA = [
  {
    key: 0,
    label: 'Manage Account',
    list: [
      {
        key: '01',
        label: 'Create New',
        path: 'CreateVpa',
      },
      {
        key: '02',
        label: 'Manage VPA',
        path: 'ManageVpa',
      },
    ],
  },
  {
    key: 1,
    label: 'Services',
    list: [
      {
        key: '03',
        label: 'DeRegister',
        path: 'DeRegister',
      },
      {
        key: '04',
        label: 'Transaction History',
        path: 'Transactions',
      },
    ],
  },
];

export const DE_REGISTER_DATA = [
  {
    key: 0,
    name: 'username1',
    amount: '$20,000',
    mailId: 'mail1@local.com',
    transaction_id: '2343495094',
    isDefault: false,
  },
];
export default HOME_LIST_DATA;
