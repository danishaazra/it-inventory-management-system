(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const tabs = $('.tabs');
  const tabLogin = $('#tab-login');
  const tabSignup = $('#tab-signup');
  const panelLogin = $('#panel-login');
  const panelSignup = $('#panel-signup');
  const indicator = $('.tab-indicator');

  function activate(tab) {
    const isSignup = tab === 'signup';
    // Toggle active tab button
    [tabLogin, tabSignup].forEach(btn => btn.classList.remove('active'));
    (isSignup ? tabSignup : tabLogin).classList.add('active');

    // Toggle active panel
    [panelLogin, panelSignup].forEach(p => p.classList.remove('active'));
    (isSignup ? panelSignup : panelLogin).classList.add('active');

    // Move indicator and ARIA state
    tabs.classList.toggle('signup', isSignup);
    tabLogin.setAttribute('aria-selected', String(!isSignup));
    tabSignup.setAttribute('aria-selected', String(isSignup));
  }

  tabLogin.addEventListener('click', () => activate('login'));
  tabSignup.addEventListener('click', () => activate('signup'));
  $$('.swap a[data-swap]').forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault();
    activate(e.currentTarget.getAttribute('data-swap'));
  }));

  // Password visibility toggles
  $$('.field.password').forEach(field => {
    const input = $('input', field);
    const toggle = $('.toggle-pass', field);
    toggle.addEventListener('click', () => {
      const showing = input.type === 'text';
      input.type = showing ? 'password' : 'text';
      toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    });
  });

  // Simple form validation + demo submit handlers
  function setError(el, msg) {
    const id = el.getAttribute('id');
    const err = document.getElementById(`${id}-error`);
    if (err) err.textContent = msg || '';
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }

  function validateEmail(input) {
    const value = String(input.value || '').trim();
    const ok = /.+@.+\..+/.test(value);
    setError(input, ok ? '' : 'Enter a valid email address');
    return ok;
  }

  function validateRequired(input, min = 1, message = 'This field is required') {
    const ok = String(input.value || '').trim().length >= min;
    setError(input, ok ? '' : message);
    return ok;
  }

  panelLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Login form submitted');
    
    const emailOk = validateEmail($('#login-email'));
    const passOk = validateRequired($('#login-password'), 6, 'At least 6 characters');
    
    console.log('Validation:', { emailOk, passOk });
    
    if (emailOk && passOk) {
      const email = $('#login-email').value.trim();
      const password = $('#login-password').value;
      const submitBtn = e.target.querySelector('.btn.primary');
      const originalText = submitBtn ? submitBtn.textContent : 'SIGN IN';
      
      console.log('Attempting login for:', email);
      
      // Disable button and show loading
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'SIGNING IN...';
      }
      
      try {
        console.log('Importing login module...');
        const { login } = await import('./authentication/login.js');
        console.log('Login module imported, calling login function...');
        await login(email, password);
        console.log('Login successful, redirect should happen now');
        // Redirect happens in login.js
      } catch (error) {
        console.error('Login error caught:', error);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
        setError($('#login-email'), '');
        
        // User-friendly error messages
        let errorMsg = 'Login failed. Please check your credentials.';
        if (error.code === 'auth/user-not-found') {
          errorMsg = 'No account found with this email.';
        } else if (error.code === 'auth/wrong-password') {
          errorMsg = 'Incorrect password. Please try again.';
        } else if (error.code === 'auth/invalid-email') {
          errorMsg = 'Invalid email address.';
          setError($('#login-email'), errorMsg);
        } else if (error.code === 'auth/too-many-requests') {
          errorMsg = 'Too many failed attempts. Please try again later.';
        } else if (error.code === 'auth/network-request-failed') {
          errorMsg = 'Network error. Please check your internet connection.';
        } else if (error.message) {
          errorMsg = error.message;
        }
        setError($('#login-password'), errorMsg);
      }
    } else {
      console.log('Form validation failed');
      if (!emailOk) {
        console.log('Email validation failed');
      }
      if (!passOk) {
        console.log('Password validation failed');
      }
    }
  });

  panelSignup.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameOk = validateRequired($('#signup-name'), 2, 'Enter your full name');
    const emailOk = validateEmail($('#signup-email'));
    const passOk = validateRequired($('#signup-password'), 8, 'At least 8 characters');
    const matchOk = (() => {
      const a = $('#signup-password');
      const b = $('#signup-confirm');
      const ok = a.value === b.value && b.value.length >= 8;
      setError(b, ok ? '' : 'Passwords must match');
      return ok;
    })();
    
    if (nameOk && emailOk && passOk && matchOk) {
      const fullName = $('#signup-name').value.trim();
      const email = $('#signup-email').value.trim();
      const password = $('#signup-password').value;
      const submitBtn = e.target.querySelector('.btn.primary');
      const originalText = submitBtn ? submitBtn.textContent : 'CREATE ACCOUNT';
      
      // Disable button and show loading
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'CREATING ACCOUNT...';
      }
      
      try {
        const { registerUser } = await import('./authentication/register.js');
        await registerUser(email, password, fullName);
        
        // Reset button state IMMEDIATELY (synchronously, before alert)
        // Get fresh reference in case DOM changed
        const resetBtn = e.target.querySelector('.btn.primary') || submitBtn;
        if (resetBtn) {
          resetBtn.disabled = false;
          resetBtn.textContent = 'CREATE ACCOUNT';
          resetBtn.style.opacity = '1';
          resetBtn.style.cursor = 'pointer';
        }
        
        // Clear all errors
        setError($('#signup-name'), '');
        setError($('#signup-email'), '');
        setError($('#signup-password'), '');
        setError($('#signup-confirm'), '');
        
        // Remove invalid states
        $('#signup-name').removeAttribute('aria-invalid');
        $('#signup-email').removeAttribute('aria-invalid');
        $('#signup-password').removeAttribute('aria-invalid');
        $('#signup-confirm').removeAttribute('aria-invalid');
        
        // Reset form
        e.target.reset();
        
        // Show success message
        alert('Your account has been created!');
        
        // Switch to login form
        activate('login');
      } catch (error) {
        // Reset button on error - get fresh reference
        const errorBtn = e.target.querySelector('.btn.primary') || submitBtn;
        if (errorBtn) {
          errorBtn.disabled = false;
          errorBtn.textContent = originalText;
        }
        
        // User-friendly error messages
        let errorMsg = 'Registration failed. Please try again.';
        if (error.code === 'auth/email-already-in-use') {
          errorMsg = 'This email is already registered. Please sign in instead.';
          setError($('#signup-email'), errorMsg);
        } else if (error.code === 'auth/weak-password') {
          errorMsg = 'Password is too weak. Use at least 8 characters.';
          setError($('#signup-password'), errorMsg);
        } else if (error.code === 'auth/invalid-email') {
          errorMsg = 'Invalid email address.';
          setError($('#signup-email'), errorMsg);
        } else if (error.message) {
          errorMsg = error.message;
          setError($('#signup-email'), errorMsg);
        } else {
          setError($('#signup-email'), errorMsg);
        }
      }
    }
  });

  // Initialize in login mode
  activate('login');
  
  // Fallback: Also handle button click directly in case form submit doesn't fire
  const loginSubmitBtn = panelLogin.querySelector('.btn.primary');
  if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener('click', (e) => {
      // Only trigger if form hasn't already been submitted
      if (!e.target.disabled) {
        const formEvent = new Event('submit', { bubbles: true, cancelable: true });
        panelLogin.dispatchEvent(formEvent);
      }
    });
  }
})();


