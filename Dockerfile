# --- Step 1: Build the React app ---
    FROM node:18 AS builder

    # Set working directory inside container
    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm install
    
    # Copy the rest of the app
    COPY . .
    
    # Build the app for production
    RUN npm run build
    
    # --- Step 2: Serve the app using Nginx ---
    FROM nginx:alpine
    
    # Remove default nginx static assets
    RUN rm -rf /usr/share/nginx/html/*
    
    # Copy built assets from the builder stage
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # Optional: Custom nginx config (for SPA routing)
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    
    # Start Nginx when container runs
    CMD ["nginx", "-g", "daemon off;"]
    