const styles = theme => ({
    listItem: {
      // cursor becomes pointer hand like thingy on hover
      cursor: 'pointer'
    },
    textSection: {
      maxWidth: '85%'
    },  
    deleteIcon: {
      position: 'absolute',
      right: '5px',
      top: 'calc(50% - 15px)',
      '&:hover': {
        color: 'red'
      }
    }
  });
  
  export default styles;