/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MagicUpgradeable,
  MagicUpgradeableInterface,
} from "../../../../contracts/upgradeable/ERC20/MagicUpgradeable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBurned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b61212e80620000ee6000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806370a082311161010f578063a217fddf116100a2578063d539139311610071578063d5391393146103f1578063d547741f14610418578063d89135cd1461042b578063dd62ed3e1461043457600080fd5b8063a217fddf146103b0578063a457c2d7146103b8578063a9059cbb146103cb578063d505accf146103de57600080fd5b80638129fc1c116100de5780638129fc1c146103855780638456cb591461038d57806391d148541461039557806395d89b41146103a857600080fd5b806370a082311461032157806375b238fc1461034a57806379cc67901461035f5780637ecebe001461037257600080fd5b8063355274ea116101875780633f4ba83a116101565780633f4ba83a146102e857806340c10f19146102f057806342966c68146103035780635c975abb1461031657600080fd5b8063355274ea146102b15780633644e515146102ba57806336568abe146102c257806339509351146102d557600080fd5b806323b872dd116101c357806323b872dd14610257578063248a9ca31461026a5780632f2ff15d1461028d578063313ce567146102a257600080fd5b806301ffc9a7146101f557806306fdde031461021d578063095ea7b31461023257806318160ddd14610245575b600080fd5b610208610203366004611c22565b610447565b60405190151581526020015b60405180910390f35b61022561047e565b6040516102149190611c70565b610208610240366004611cbf565b610510565b6035545b604051908152602001610214565b610208610265366004611ce9565b610528565b610249610278366004611d25565b600090815260c9602052604090206001015490565b6102a061029b366004611d3e565b61054c565b005b60405160128152602001610214565b61016254610249565b610249610576565b6102a06102d0366004611d3e565b610585565b6102086102e3366004611cbf565b610608565b6102a061062a565b6102a06102fe366004611cbf565b61064d565b6102a0610311366004611d25565b610681565b60655460ff16610208565b61024961032f366004611d6a565b6001600160a01b031660009081526033602052604090205490565b6102496000805160206120d983398151915281565b6102a061036d366004611cbf565b6106a4565b610249610380366004611d6a565b6106d2565b6102a06106f1565b6102a06108dc565b6102086103a3366004611d3e565b6108fc565b610225610927565b610249600081565b6102086103c6366004611cbf565b610936565b6102086103d9366004611cbf565b6109b1565b6102a06103ec366004611d85565b6109bf565b6102497f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102a0610426366004611d3e565b610b23565b61019554610249565b610249610442366004611df8565b610b48565b60006001600160e01b03198216637965db0b60e01b148061047857506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606036805461048d90611e22565b80601f01602080910402602001604051908101604052809291908181526020018280546104b990611e22565b80156105065780601f106104db57610100808354040283529160200191610506565b820191906000526020600020905b8154815290600101906020018083116104e957829003601f168201915b5050505050905090565b60003361051e818585610b73565b5060019392505050565b600033610536858285610c97565b610541858585610d11565b506001949350505050565b600082815260c9602052604090206001015461056781610eea565b6105718383610ef4565b505050565b6000610580610f7a565b905090565b6001600160a01b03811633146105fa5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6106048282610ff5565b5050565b60003361051e81858561061b8383610b48565b6106259190611e6c565b610b73565b6000805160206120d983398151915261064281610eea565b61064a61105c565b50565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661067781610eea565b61057183836110ae565b8061019560008282546106949190611e6c565b9091555061064a90503382611128565b6106af823383610c97565b8061019560008282546106c29190611e6c565b9091555061060490508282611128565b6001600160a01b038116600090815261012f6020526040812054610478565b600054610100900460ff16158080156107115750600054600160ff909116105b8061072b5750303b15801561072b575060005460ff166001145b61078e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105f1565b6000805460ff1916600117905580156107b1576000805461ff0019166101001790555b6107f5604051806040016040528060058152602001644d6167696360d81b815250604051806040016040528060058152602001644d4147494360d81b815250611282565b6107fd6112b3565b6108056112e4565b61082b604051806040016040528060058152602001644d6167696360d81b81525061130b565b61083f6a52b7d2dcc80cd2e4000000611355565b6108476112e4565b610852600033610ef4565b61086a6000805160206120d983398151915233610ef4565b6108947f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610ef4565b801561064a576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b6000805160206120d98339815191526108f481610eea565b61064a611385565b600091825260c9602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606037805461048d90611e22565b600033816109448286610b48565b9050838110156109a45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016105f1565b6105418286868403610b73565b60003361051e818585610d11565b83421115610a0f5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016105f1565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610a3e8c6113c2565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610a99826113eb565b90506000610aa982878787611439565b9050896001600160a01b0316816001600160a01b031614610b0c5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016105f1565b610b178a8a8a610b73565b50505050505050505050565b600082815260c96020526040902060010154610b3e81610eea565b6105718383610ff5565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6001600160a01b038316610bd55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016105f1565b6001600160a01b038216610c365760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016105f1565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610ca38484610b48565b90506000198114610d0b5781811015610cfe5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105f1565b610d0b8484848403610b73565b50505050565b6001600160a01b038316610d755760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016105f1565b6001600160a01b038216610dd75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016105f1565b610de2838383611461565b6001600160a01b03831660009081526033602052604090205481811015610e5a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016105f1565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610e91908490611e6c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610edd91815260200190565b60405180910390a3610d0b565b61064a8133611469565b610efe82826108fc565b61060457600082815260c9602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610f363390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006105807f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610fa960fb5490565b60fc546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b610fff82826108fc565b1561060457600082815260c9602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6110646114cd565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b61016254816110bd6101955490565b6035546110ca9190611e6c565b6110d49190611e6c565b111561111e5760405162461bcd60e51b8152602060048201526019602482015278115490cc8c10d85c1c19590e8818d85c08195e18d959591959603a1b60448201526064016105f1565b6106048282611516565b6001600160a01b0382166111885760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016105f1565b61119482600083611461565b6001600160a01b038216600090815260336020526040902054818110156112085760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016105f1565b6001600160a01b0383166000908152603360205260408120838303905560358054849290611237908490611e7f565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600054610100900460ff166112a95760405162461bcd60e51b81526004016105f190611e92565b6106048282611582565b600054610100900460ff166112da5760405162461bcd60e51b81526004016105f190611e92565b6112e26115c2565b565b600054610100900460ff166112e25760405162461bcd60e51b81526004016105f190611e92565b600054610100900460ff166113325760405162461bcd60e51b81526004016105f190611e92565b61064a81604051806040016040528060018152602001603160f81b8152506115f5565b600054610100900460ff1661137c5760405162461bcd60e51b81526004016105f190611e92565b61064a81611636565b61138d6116ab565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110913390565b6001600160a01b038116600090815261012f602052604090208054600181018255905b50919050565b60006104786113f8610f7a565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061144a878787876116f1565b91509150611457816117de565b5095945050505050565b6105716116ab565b61147382826108fc565b6106045761148b816001600160a01b03166014611994565b611496836020611994565b6040516020016114a7929190611edd565b60408051601f198184030181529082905262461bcd60e51b82526105f191600401611c70565b60655460ff166112e25760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016105f1565b610162548161152460355490565b61152e9190611e6c565b11156115785760405162461bcd60e51b8152602060048201526019602482015278115490cc8c10d85c1c19590e8818d85c08195e18d959591959603a1b60448201526064016105f1565b6106048282611b37565b600054610100900460ff166115a95760405162461bcd60e51b81526004016105f190611e92565b60366115b58382611fb6565b5060376105718282611fb6565b600054610100900460ff166115e95760405162461bcd60e51b81526004016105f190611e92565b6065805460ff19169055565b600054610100900460ff1661161c5760405162461bcd60e51b81526004016105f190611e92565b81516020928301208151919092012060fb9190915560fc55565b600054610100900460ff1661165d5760405162461bcd60e51b81526004016105f190611e92565b600081116116a55760405162461bcd60e51b8152602060048201526015602482015274045524332304361707065643a20636170206973203605c1b60448201526064016105f1565b61016255565b60655460ff16156112e25760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016105f1565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561172857506000905060036117d5565b8460ff16601b1415801561174057508460ff16601c14155b1561175157506000905060046117d5565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156117a5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166117ce576000600192509250506117d5565b9150600090505b94509492505050565b60008160048111156117f2576117f2612076565b036117fa5750565b600181600481111561180e5761180e612076565b0361185b5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105f1565b600281600481111561186f5761186f612076565b036118bc5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105f1565b60038160048111156118d0576118d0612076565b036119285760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105f1565b600481600481111561193c5761193c612076565b0361064a5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016105f1565b606060006119a383600261208c565b6119ae906002611e6c565b67ffffffffffffffff8111156119c6576119c6611f52565b6040519080825280601f01601f1916602001820160405280156119f0576020820181803683370190505b509050600360fc1b81600081518110611a0b57611a0b6120ab565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611a3a57611a3a6120ab565b60200101906001600160f81b031916908160001a9053506000611a5e84600261208c565b611a69906001611e6c565b90505b6001811115611ae1576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611a9d57611a9d6120ab565b1a60f81b828281518110611ab357611ab36120ab565b60200101906001600160f81b031916908160001a90535060049490941c93611ada816120c1565b9050611a6c565b508315611b305760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105f1565b9392505050565b6001600160a01b038216611b8d5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105f1565b611b9960008383611461565b8060356000828254611bab9190611e6c565b90915550506001600160a01b03821660009081526033602052604081208054839290611bd8908490611e6c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208284031215611c3457600080fd5b81356001600160e01b031981168114611b3057600080fd5b60005b83811015611c67578181015183820152602001611c4f565b50506000910152565b6020815260008251806020840152611c8f816040850160208701611c4c565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114611cba57600080fd5b919050565b60008060408385031215611cd257600080fd5b611cdb83611ca3565b946020939093013593505050565b600080600060608486031215611cfe57600080fd5b611d0784611ca3565b9250611d1560208501611ca3565b9150604084013590509250925092565b600060208284031215611d3757600080fd5b5035919050565b60008060408385031215611d5157600080fd5b82359150611d6160208401611ca3565b90509250929050565b600060208284031215611d7c57600080fd5b611b3082611ca3565b600080600080600080600060e0888a031215611da057600080fd5b611da988611ca3565b9650611db760208901611ca3565b95506040880135945060608801359350608088013560ff81168114611ddb57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611e0b57600080fd5b611e1483611ca3565b9150611d6160208401611ca3565b600181811c90821680611e3657607f821691505b6020821081036113e557634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561047857610478611e56565b8181038181111561047857610478611e56565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611f15816017850160208801611c4c565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611f46816028840160208801611c4c565b01602801949350505050565b634e487b7160e01b600052604160045260246000fd5b601f82111561057157600081815260208120601f850160051c81016020861015611f8f5750805b601f850160051c820191505b81811015611fae57828155600101611f9b565b505050505050565b815167ffffffffffffffff811115611fd057611fd0611f52565b611fe481611fde8454611e22565b84611f68565b602080601f83116001811461201957600084156120015750858301515b600019600386901b1c1916600185901b178555611fae565b600085815260208120601f198616915b8281101561204857888601518255948401946001909101908401612029565b50858210156120665787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052602160045260246000fd5b60008160001904831182151516156120a6576120a6611e56565b500290565b634e487b7160e01b600052603260045260246000fd5b6000816120d0576120d0611e56565b50600019019056fea49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a264697066735822122059e90b8ea718077fd415026aa772e3f5ea7a9fb97af0c80ac413b196d5c0589d64736f6c63430008100033";

type MagicUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagicUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MagicUpgradeable__factory extends ContractFactory {
  constructor(...args: MagicUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MagicUpgradeable> {
    return super.deploy(overrides || {}) as Promise<MagicUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MagicUpgradeable {
    return super.attach(address) as MagicUpgradeable;
  }
  override connect(signer: Signer): MagicUpgradeable__factory {
    return super.connect(signer) as MagicUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagicUpgradeableInterface {
    return new utils.Interface(_abi) as MagicUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagicUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as MagicUpgradeable;
  }
}