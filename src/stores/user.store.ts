import {create} from 'zustand';

interface UserStore{
    user: any;
    member: any;
    setMember: (member:any) =>void;
    removeMember: () => void;
}

const useStore = create<UserStore>((set) =>({
        user:null,
        member: null,
        setMember: (member: any) => {
            set((state) =>({...state, member}));
        },
        removeMember: () =>{
            set((state)=>({...state, member:null}));
        },
}));

export default useStore;