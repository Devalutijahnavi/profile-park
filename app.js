const { useState, useEffect, useRef } = React;

// Inline Styles
const styles = {
  searchContainer: {
    maxWidth: '700px',
    margin: '0 auto 40px',
    position: 'relative',
  },
  searchBox: {
    width: '100%',
    padding: '18px 60px 18px 24px',
    fontSize: '16px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '8px',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
  },
  searchBoxFocus: {
    border: '2px solid #1976d2',
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
    padding: '17px 59px 17px 23px',
  },
  searchIcon: {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '24px',
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
  },
  clearButton: {
    position: 'absolute',
    right: '50px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.04)',
    border: 'none',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: 'rgba(0, 0, 0, 0.54)',
  },
};

// SearchBar Component
const SearchBar = ({ searchQuery, onSearchChange, onClearSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search users by name or username..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...styles.searchBox,
          ...(isFocused ? styles.searchBoxFocus : {}),
        }}
      />
      {searchQuery && (
        <button
          onClick={onClearSearch}
          style={styles.clearButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.08)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <span className="material-icons" style={{ fontSize: '18px' }}>close</span>
        </button>
      )}
      <span 
        className="material-icons" 
        style={{
          ...styles.searchIcon,
          animation: isFocused ? 'rotate 0.5s ease' : 'none',
        }}
      >
        search
      </span>
    </div>
  );
};

// UserCard Component
const UserCard = ({ user, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  const cardStyle = {
    background: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: isHovered 
      ? '0 8px 24px rgba(0, 0, 0, 0.15)'
      : '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    animation: `fadeIn 0.6s ease-out ${index * 0.08}s both`,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  };
  

  
  const avatarStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: '#1976d2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.25)',
    transition: 'transform 0.2s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };
  
  const nameStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: '6px',
    letterSpacing: '-0.01em',
  };
  
  const usernameStyle = {
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 12px',
    background: '#e3f2fd',
    borderRadius: '16px',
    fontWeight: '500',
  };
  
  const infoRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
    padding: '8px',
    borderRadius: '6px',
    background: 'transparent',
    transition: 'background 0.2s ease',
  };
  
  const iconStyle = {
    fontSize: '20px',
    color: '#1976d2',
    transition: 'transform 0.2s ease',
  };
  
  const textStyle = {
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.87)',
    wordBreak: 'break-word',
    flex: 1,
  };
  
  const linkStyle = {
    fontSize: '14px',
    color: '#1976d2',
    textDecoration: 'none',
    wordBreak: 'break-word',
    flex: 1,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative',
  };
  
  const companyBadgeStyle = {
    marginTop: '16px',
    padding: '10px 16px',
    background: '#f5f5f5',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };
  
  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 24px',
    background: '#1976d2',
    border: 'none',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.2s ease',
    boxShadow: isHovered ? '0 4px 12px rgba(25, 118, 210, 0.3)' : '0 2px 6px rgba(25, 118, 210, 0.2)',
  };
  
  return (
    <div 
      ref={cardRef}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div style={avatarStyle}>
          <span className="material-icons" style={{ fontSize: '30px', color: '#ffffff' }}>person</span>
        </div>
        
        <h3 style={nameStyle}>{user.name}</h3>
        <div style={usernameStyle}>
          <span className="material-icons" style={{ fontSize: '16px' }}>alternate_email</span>
          {user.username}
        </div>
        
        <div style={infoRowStyle}>
          <span className="material-icons" style={iconStyle}>email</span>
          <a 
            href={`mailto:${user.email}`}
            style={linkStyle}
            title={`Send email to ${user.email}`}
            aria-label={`Send email to ${user.email}`}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
              e.currentTarget.style.color = '#1565c0';
              e.currentTarget.previousElementSibling.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
              e.currentTarget.style.color = '#1976d2';
              e.currentTarget.previousElementSibling.style.transform = 'scale(1)';
            }}
          >
            {user.email}
          </a>
        </div>
        
        <div style={infoRowStyle}>
          <span className="material-icons" style={iconStyle}>phone</span>
          <a 
            href={`tel:${user.phone.replace(/\s|-|\(|\)/g, '')}`}
            style={linkStyle}
            title={`Call ${user.phone}`}
            aria-label={`Call ${user.phone}`}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
              e.currentTarget.style.color = '#1565c0';
              e.currentTarget.previousElementSibling.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
              e.currentTarget.style.color = '#1976d2';
              e.currentTarget.previousElementSibling.style.transform = 'scale(1)';
            }}
          >
            {user.phone}
          </a>
        </div>
        
        <div style={infoRowStyle}>
          <span className="material-icons" style={iconStyle}>language</span>
          <a 
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            title={`Visit ${user.website} in new tab`}
            aria-label={`Visit ${user.website} in new tab`}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
              e.currentTarget.style.color = '#1565c0';
              e.currentTarget.previousElementSibling.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
              e.currentTarget.style.color = '#1976d2';
              e.currentTarget.previousElementSibling.style.transform = 'scale(1)';
            }}
          >
            {user.website}
          </a>
        </div>
        
        <div style={companyBadgeStyle}>
          <span className="material-icons" style={{ ...iconStyle, fontSize: '18px' }}>business</span>
          <span style={{ ...textStyle, fontSize: '13px', fontWeight: '500' }}>{user.company.name}</span>
        </div>
        
        <button style={buttonStyle}>
          View Profile
        </button>
      </div>
    </div>
  );
};

// UserList Component
const UserList = ({ users, searchQuery }) => {
  const emptyStateStyle = {
    textAlign: 'center',
    padding: '80px 20px',
  };
  
  const emptyIconStyle = {
    fontSize: '80px',
    color: 'rgba(0, 0, 0, 0.26)',
    marginBottom: '20px',
  };
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
    padding: '0',
  };
  
  if (users.length === 0) {
    return (
      <div style={emptyStateStyle}>
        <span className="material-icons" style={emptyIconStyle}>search_off</span>
        <h3 style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.87)', marginBottom: '10px', fontWeight: '600' }}>
          No users found
        </h3>
        <p style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.6)' }}>
          Try adjusting your search query
        </p>
      </div>
    );
  }

  return (
    <div style={gridStyle}>
      {users.map((user, index) => (
        <UserCard key={user.id} user={user} index={index} />
      ))}
    </div>
  );
};

// Stats Component
const StatsBar = ({ totalUsers, filteredCount, searchQuery }) => {
  const statsContainerStyle = {
    display: 'flex',
    gap: '16px',
    marginBottom: '40px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  
  const statChipStyle = {
    padding: '10px 20px',
    background: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '20px',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  };
  
  return (
    <div style={statsContainerStyle}>
      <div style={statChipStyle}>
        <span className="material-icons" style={{ fontSize: '18px' }}>group</span>
        Total Users: {totalUsers}
      </div>
      {searchQuery && (
        <div style={{ ...statChipStyle, background: '#e3f2fd', border: '1px solid #1976d2' }}>
          <span className="material-icons" style={{ fontSize: '18px' }}>filter_alt</span>
          Filtered: {filteredCount}
        </div>
      )}
    </div>
  );
};

// Loading Component
const LoadingSpinner = () => {
  const spinnerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 20px',
    flexDirection: 'column',
    gap: '20px',
  };
  
  const spinnerStyle = {
    width: '60px',
    height: '60px',
    border: '4px solid rgba(25, 118, 210, 0.2)',
    borderTop: '4px solid #1976d2',
    borderRadius: '50%',
    animation: 'rotate 1s linear infinite',
  };
  
  return (
    <div style={spinnerContainerStyle}>
      <div style={spinnerStyle}></div>
      <p style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '16px' }}>Loading users...</p>
    </div>
  );
};

// Error Component
const ErrorMessage = ({ error }) => {
  const errorStyle = {
    padding: '20px',
    background: '#ffebee',
    border: '1px solid #ef5350',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 8px rgba(239, 83, 80, 0.15)',
  };
  
  return (
    <div style={errorStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
        <span className="material-icons" style={{ color: '#f5576c', fontSize: '24px' }}>error</span>
        <h4 style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: '18px', fontWeight: '600', margin: 0 }}>Error</h4>
      </div>
      <p style={{ color: 'rgba(0, 0, 0, 0.87)', margin: '0 0 8px 0', fontSize: '15px' }}>{error}</p>
      <p style={{ color: 'rgba(0, 0, 0, 0.6)', margin: 0, fontSize: '14px' }}>
        Please try refreshing the page or check your internet connection.
      </p>
    </div>
  );
};

// Main App Component
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    );
  });

  // Handle search input change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const containerStyle = {
    minHeight: '100vh',
    padding: '60px 20px',
    maxWidth: '1400px',
    margin: '0 auto',
  };
  
  const headerStyle = {
    textAlign: 'center',
    marginBottom: '50px',
    animation: 'slideUp 0.8s ease-out',
  };
  
  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 3rem)',
    fontWeight: '700',
    color: '#1976d2',
    marginBottom: '12px',
    letterSpacing: '-0.01em',
  };
  
  const subtitleContainerStyle = {
    display: 'inline-block',
    padding: '8px 20px',
    background: '#e3f2fd',
    border: '1px solid rgba(25, 118, 210, 0.2)',
    borderRadius: '24px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  };
  
  const subtitleStyle = {
    fontSize: '15px',
    color: 'rgba(0, 0, 0, 0.7)',
    margin: 0,
  };
  
  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>PROFILE PARK</h1>
        <div style={subtitleContainerStyle}>
          <p style={subtitleStyle}>Browse and search through our user directory</p>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />

      {/* Stats Bar */}
      {!loading && !error && (
        <StatsBar 
          totalUsers={users.length}
          filteredCount={filteredUsers.length}
          searchQuery={searchQuery}
        />
      )}

      {/* Loading State */}
      {loading && <LoadingSpinner />}

      {/* Error State */}
      {error && <ErrorMessage error={error} />}

      {/* User List */}
      {!loading && !error && (
        <UserList users={filteredUsers} searchQuery={searchQuery} />
      )}
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);