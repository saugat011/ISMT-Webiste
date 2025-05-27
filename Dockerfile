# ----------- Build Stage -------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only package files to leverage Docker cache
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the React/Vite app
RUN npm run build


# ----------- Production Stage -------------
FROM nginx:1.25-alpine AS production

# Set environment variable for Vite base path if needed (optional)
# ENV VITE_BASE="/"

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose default HTTP port
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
