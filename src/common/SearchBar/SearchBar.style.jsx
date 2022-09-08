import tw, { styled } from 'twin.macro';

export const SearchBarWrapper = styled.form`
  ${tw`
    flex
    relative
    w-full
  `}
`;

export const InputField = styled.input`
  ${tw`
    rounded-full
    bg-primary-dimmed
    flex
    pl-7 
    pr-14
    py-2
    text-lg
    outline-none
    ml-auto
    w-11/12
    sm:w-auto
  `}
`;

export const SubmitButton = styled.button`
  ${tw`
    absolute 
    right-0
    text-2xl
    top-1/2 
    -translate-y-1/2
    right-7
    w-5
  `}
`;
