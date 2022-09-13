interface  AppProps{
  headerText:string
}
export default function App({headerText}:AppProps){
  return(
    <>
    <h1>{headerText}</h1>
    </>

  );
}