export const MediaButton = styled.button`
    background: linear-gradient(45deg, #9281e1, #de2f89);
    width: 30%;
    font-size: 1rem;
    padding: 10px;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        margin-right: 10px;
    }
    @media (max-width: 768px) {
        width: 50%;
    }
`;
