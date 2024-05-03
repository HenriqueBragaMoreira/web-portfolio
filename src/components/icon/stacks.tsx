import React from "react";

type StackIconsT = {
  stack_name: string;
  stack_link: string;
  stack_icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const stackIcons: StackIconsT[] = [
  {
    stack_name: "NextJS",
    stack_link: "https://nextjs.org/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...props}
      >
        <defs>
          <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
          <circle id="a" cx={128} cy={128} r={128} />
        </defs>
        <mask id="b" fill="#fff">
          <use href="#a" />
        </mask>
        <g mask="url(#b)">
          <circle cx={128} cy={128} r={128} />
          <path
            fill="url(#c)"
            d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0013.524-10.418"
          />
          <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z" />
        </g>
      </svg>
    )
  },
  {
    stack_name: "React",
    stack_link: "https://react.dev/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.13em"
        height="1em"
        viewBox="0 0 256 228"
        {...props}
      >
        <path
          fill="#00d8ff"
          d="M210.483 73.824a171.49 171.49 0 00-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 00-6.375 5.848 155.866 155.866 0 00-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 001.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 006.921 2.165 167.467 167.467 0 00-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 005.342-4.923 168.064 168.064 0 006.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 00-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 01-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 011.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 011.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 01-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 01-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 013.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 01-1.76-7.887m110.427 27.268a347.8 347.8 0 00-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 00-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 00-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323.167 323.167 0 00-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 00-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 007.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 007.859-13.026 347.403 347.403 0 007.425-13.565m-16.898 8.101a358.557 358.557 0 01-12.281 19.815 329.4 329.4 0 01-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 01-12.513-19.846h.001a307.41 307.41 0 01-10.923-20.627 310.278 310.278 0 0110.89-20.637l-.001.001a307.318 307.318 0 0112.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0112.335 19.695 358.489 358.489 0 0111.036 20.54 329.472 329.472 0 01-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 015.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86"
        />
      </svg>
    )
  },
  {
    stack_name: "Typescript",
    stack_link: "https://www.typescriptlang.org/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...props}
      >
        <path
          fill="#3178c6"
          d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0"
        />
        <path
          fill="#fff"
          d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 00-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 017.558 2.719 41.7 41.7 0 016.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0110.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 01-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z"
        />
      </svg>
    )
  },
  {
    stack_name: "Javascript",
    stack_link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...props}
      >
        <path fill="#f7df1e" d="M0 0h256v256H0z" />
        <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
      </svg>
    )
  },
  {
    stack_name: "Tailwind CSS",
    stack_link: "https://tailwindcss.com/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
        {...props}
      >
        <path
          fill="#38bdf8"
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
        />
      </svg>
    )
  },
  {
    stack_name: "Styled-Components",
    stack_link: "https://styled-components.com/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...props}
      >
        <g fill="none">
          <rect width={256} height={256} fill="url(#a)" rx={60} />
          <path
            fill="#fff"
            d="M11.487 129.079l50.304 20.384v14.269l-59.55-27.591v-8.372zm50.304-16.743L11.56 133.01l-9.318 1.02v-8.445L61.79 98.067zm179.58 19.655l-51.76-20.165V97.921l62.17 27.518v8.518zm-51.76 17.763l51.906-20.602 10.264-1.529v8.445l-62.17 27.591z"
          />
          <path
            fill="#b956a6"
            fillRule="evenodd"
            d="M176.077 61.099c-.288 4.566-2.345 9.334-1.772 13.773 3.593 6.354 11.501 7.367 18.025 7.803 4.52.808 4.463-2.185 4.16-5.547l.055-16.124c-6.823.025-13.648-.067-20.468.095m-53.801 12.77c-11.108 1.886-22.368 7.194-31.609 13.584-7.438 5.789 6.385 11.399 11.4 12.337 10.09.123 19.039-6.683 25.667-13.747 2.164-2.97 4.867-7.517 2.148-10.96-2.076-1.8-5.095-1.363-7.606-1.213m23.637 16.155c-9.133 1.74-17.823 5.504-25.512 10.745-5.637 1.77-10.283 7.959-3.298 11.06 7.335 5.845 15.836 4.413 22.591.467 6.186-3.677 12.868-8.214 15.73-15.136 2.703-7.583-4.271-7.864-9.511-7.136m25.909 29.383c-1.701 7.104-8.855 10.334-12.661 15.963-3.112 4.106-1.671 8.943 1.872 12.175 1.725 3.577 4.749 5.576 7.992 2.469 8.352-5.678 10.662-16.738 10.315-26.321.617-3.958-3.924-.38-7.518-4.286m-31.783 13.343c-11.091 1.898-22.184 7.302-31.429 13.682-7.177 5.781 6.34 11.179 11.396 12.035 10.277.015 19.444-6.608 25.942-14.13 2.26-2.987 4.999-8.788.524-11.163-2.001-.848-4.324-.599-6.433-.424"
            clipRule="evenodd"
          />
          <path
            fill="#fccc44"
            fillRule="evenodd"
            d="M90.667 87.453c-8.53 3.413-16.758 7.557-24.884 11.897-1.51 5.615-.299 12.568-.69 18.725-.03 25.316-.016 50.633-.02 75.949h18.82c3.8-3.578 8.56-6.197 12.688-9.446 15.894-11.399 31.783-22.842 47.656-34.209 1.168.525.42-6.871-2.142-1.734-6.071 5.713-14.129 10.412-22.658 9.953-4.84-1.592-12.642-4.293-12.691-10.224 3.407-4.011-6.286 2.1-8.938 2.975-8.622 4.14-17.04 8.763-25.68 12.826 2.076-2.23 5.96-4.309 8.714-6.521 19.673-14.122 39.341-28.299 59.061-42.41 3.793-2.663 7.457-5.568 11.367-8.057.357 1.379 1.027-6.593-1.881-1.685-5.928 5.876-13.924 10.25-22.357 10.31-4.743-1.44-14.845-4.883-12.596-11.007 1.097-2.149-10.188 4.581-5.202.786 5.307-3.878 10.656-7.687 16.004-11.525 2.701-.203 2.126-10.236-1.544-3.764-6.165 5.417-14.265 10.373-22.756 9.198-4.77-1.373-10.493-4.032-12.227-9.02-.574-1.198 3.212-3.065 1.956-3.017m35.339 6.193c-.473 1.353.857-.494 0 0"
            clipRule="evenodd"
          />
          <path
            fill="#62777f"
            fillRule="evenodd"
            d="M179.899 80.75c-2.663 12.716-5.574 26.025-8.077 38.657 7.192 9.064 7.889-5.726 9.147-9.908 2.033-8.741 4.441-15.341 4.696-24.391.54-3.089-3.09-4.96-5.766-4.359m8.251 9.972c-.225 1.303.328.245 0 0m-8.39 28.514c.346.745.346-.746 0 0"
            clipRule="evenodd"
          />
          <path
            fill="#4e5e67"
            fillRule="evenodd"
            d="M184.616 82.19c2.244 12.602-5.189 27.912-7.62 39.794 5.52-4.062 9.785-22.492 10.875-29.706.281-.825.627-2.901.702-2.976.347-1.751 3.58-4.718 3.757-6.627 1.882-1.328-9.25-1.542-7.714-.486m-4.577 37.046c-.347.745-.347-.746 0 0"
            clipRule="evenodd"
          />
          <path
            fill="#dc9624"
            fillRule="evenodd"
            d="M90.854 87.663c-3.112 3.116-1.944 2.355.372-.236zm33.66 1.543c-3.605 5.417-16.605 9.947-18.242 10.298 7.82-1.465 15.109-6.33 20.238-12.028-.815.363-1.299 1.216-1.996 1.73m-35.798 1.759c1.943 4.672 9.008 7.776 12.441 8.5-4.687-1.51-10.204-4.188-12.441-8.5m37.01 2.702c-.981 1.158-4.475 2.89-6.317 4.59-3.951 2.914-8.038 5.622-11.944 8.609 2.487-.107 9.775-5.551 6.039-.027 3.166 5.449 10.059 9.238 16.344 8.892 8.3-1.303 15.954-5.892 21.456-12.274-6.679 6.609-15.509 12.829-25.28 11.972-4.729-1.092-17.651-7.767-9.007-12.446 3.048-2.507 8.303-3.82 8.898-8.226-.125-.55.9-1.087-.189-1.09m-23.659 6.123c3.145.411 3.145-.41 0 0m49.003 7.525c-12.479 8.694-24.777 17.728-37.148 26.578-14.02 10.034-27.98 20.105-41.996 30.131 5.27-1.777 10.55-5.247 15.785-7.644 7.21-3.814 14.812-6.827 21.558-11.46 13.338-7.852 27.444-15.333 37.703-27.346 2.239-2.626 4.484-6.853 4.584-9.696-.323.091-.078-1.137-.486-.563m-42.46 39.117c-2.245 2.537-3.157 4.35-.827 1.124-.041.374 1.891-2.003.827-1.124m34.156 1.214c-5.914 6.236-14.661 10.734-22.868 11.037 9.488.069 18.048-5.563 24.476-12.207-.422-.51-1.277 1.188-1.608 1.17m1.807 1.96c-19.869 14.464-40.424 29.467-60.36 43.879 3.14.985 9.979 1.447 13.1-2.574 6.64-4.582 14.105-7.951 20.767-12.595 9.647-6.26 19.976-13.102 25.455-23.623.261-1.411 2.2-3.949 1.038-5.087m-37.813.918c.922 3.892 12.448 8.359 11.198 7.504-4.25-1.49-8.466-3.812-11.198-7.504"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient id="a" x1={0} x2={256} y1={256} y2={0} gradientUnits="userSpaceOnUse">
              <stop stopColor="#db7093" />
              <stop offset={1} stopColor="#f3b661" />
            </linearGradient>
          </defs>
        </g>
      </svg>
    )
  },
  {
    stack_name: "Shadcn",
    stack_link: "https://ui.shadcn.com/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <div className="dark:bg-black bg-white p-0.3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            className="fill-current dark:text-white text-black"
            d="M22.219 11.784L11.784 22.219a1.045 1.045 0 001.476 1.476L23.695 13.26a1.045 1.045 0 00-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 001.476 1.476L21.608 1.781A1.045 1.045 0 0020.132.305"
          />
        </svg>
      </div>
    )
  },
  {
    stack_name: "Framer Motion",
    stack_link: "https://www.framer.com/motion/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
        {...props}
      >
        <path d="M22.684 0h84.253v42.667H64.81zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333z" />
      </svg>
    )
  },
  {
    stack_name: "React Hook Form",
    stack_link: "https://react-hook-form.com/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        style={{
          backgroundColor: "#EC5990",
          borderRadius: "8px",
          padding: ".25em"
        }}
        {...props}
      >
        <path
          fill="currentColor"
          d="M10.775 17.348H5.806a.282.282 0 100 .563h4.97a.282.282 0 100-.563m7.32 0h-4.969a.282.282 0 100 .563h4.969a.282.282 0 000-.563m-7.334-6.475H5.807a.282.282 0 100 .563h4.954a.282.282 0 100-.563m7.32 0h-4.955a.282.282 0 100 .563h4.955a.282.282 0 000-.563m.552-9.2h-4.341a2.404 2.404 0 00-4.58 0H5.366A3.097 3.097 0 002.27 4.769v16.134A3.097 3.097 0 005.367 24h13.266a3.097 3.097 0 003.096-3.097V4.77a3.097 3.097 0 00-3.096-3.096m-8.705.563a.28.28 0 00.281-.223 1.841 1.841 0 013.598 0 .28.28 0 00.282.223h1.514V4.08a.845.845 0 01-.844.844H9.255a.845.845 0 01-.844-.844V2.236zm11.238 18.667c0 1.4-1.134 2.534-2.533 2.534H5.367a2.534 2.534 0 01-2.533-2.534V4.77a2.533 2.533 0 012.533-2.533h2.48V4.08c0 .777.63 1.407 1.408 1.407h5.49c.777 0 1.407-.63 1.407-1.407V2.236h2.48c1.4 0 2.534 1.134 2.534 2.533z"
        />
      </svg>
    )
  },
  {
    stack_name: "Zod",
    stack_link: "https://zod.dev/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.27em"
        height="1em"
        viewBox="0 0 256 203"
        {...props}
      >
        <defs>
          <filter
            id="a"
            width="105.2%"
            height="106.5%"
            x="-2.2%"
            y="-2.8%"
            filterUnits="objectBoundingBox"
          >
            <feOffset dx={1} dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={2} />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
            />
          </filter>
          <path
            id="b"
            fill="#000"
            d="M200.42 0H53.63L0 53.355l121.76 146.624 9.714-10.9L252 53.857zm-5.362 12.562l39.84 41.6-112.8 126.558L17 54.162l41.815-41.6z"
          />
        </defs>
        <g transform="translate(2 1.51)">
          <path
            fill="#18253f"
            d="M58.816 12.522h136.278l39.933 41.691-112.989 126.553L16.957 54.213z"
          />
          <path
            fill="#274d82"
            d="M149.427 150.875H96.013l-24.124-29.534 68.364-.002.002-4.19h39.078z"
          />
          <path
            fill="#274d82"
            d="M223.56 42.323L76.178 127.414l-19.226-24.052 114.099-65.877-2.096-3.631 30.391-17.546zm-78.964-29.759L33.93 76.457 16.719 54.972l74.095-42.779z"
          />
          <use filter="url(#a)" href="#b" />
          <use fill="#3068b7" href="#b" />
        </g>
      </svg>
    )
  },
  {
    stack_name: "Axios",
    stack_link: "https://axios-http.com/ptbr/docs/intro",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6.83em"
        height="1em"
        viewBox="0 0 512 75"
        {...props}
      >
        <path
          fill="#5a29e4"
          d="M254.114 9.182v60.165l-6.557 5.282v-50.05h-12.343zM481.537 0c5.492 0 10.59.828 15.297 2.484 4.528 1.564 8.433 3.323 11.717 5.275l.573.347-6.799 12.943c-.62-.507-1.496-1.088-2.627-1.741l-.643-.364-.693-.378-.743-.393c-2.092-1.133-4.576-2.092-7.453-2.876a30.487 30.487 0 00-8.89-1.308c-8.193 0-12.29 2.31-12.29 6.93 0 2.701 1.482 4.619 4.445 5.752l.676.245.717.249.76.253.804.256.846.261.888.265c.152.045.305.09.46.134l.953.27.995.276 1.038.278 1.08.283 1.124.287 1.765.438 1.23.297c5.142 1.307 9.588 2.789 13.336 4.445 3.675 1.587 6.51 3.694 8.504 6.322l.255.346c2.092 2.702 3.138 6.275 3.138 10.72 0 5.404-1.395 9.762-4.184 13.075-2.702 3.224-6.275 5.578-10.72 7.06-4.446 1.394-9.24 2.091-14.382 2.091-5.927 0-11.81-.828-17.65-2.484-5.562-1.577-10.53-3.707-14.906-6.391l-.652-.407 7.06-13.728c1.133 1.133 3.007 2.397 5.622 3.791 2.702 1.395 5.84 2.572 9.413 3.53 3.574.96 7.365 1.439 11.375 1.439 8.018 0 12.028-2.136 12.028-6.407 0-2.876-1.874-4.924-5.622-6.144l-.901-.317-.947-.321-.991-.326-1.037-.332-1.082-.336-1.127-.342-.58-.172-1.195-.349-1.24-.354-1.286-.359-1.33-.364-2.08-.555-.716-.188c-7.496-1.917-13.074-4.358-16.735-7.321-3.574-3.051-5.36-7.41-5.36-13.075 0-5.055 1.263-9.282 3.79-12.681 2.616-3.4 6.102-5.971 10.46-7.714C471.47.872 476.308 0 481.537 0M360.292.13c5.531 0 10.581 1.008 15.146 3.023l.545.246c4.707 2.092 8.716 4.925 12.028 8.498 3.4 3.487 6.012 7.453 7.842 11.898 1.83 4.445 2.748 8.977 2.748 13.597 0 4.794-.958 9.413-2.876 13.859-1.917 4.358-4.622 8.28-8.109 11.766-3.399 3.4-7.449 6.101-12.156 8.106-4.706 2.005-9.849 3.007-15.427 3.007-5.753 0-10.982-1.002-15.689-3.007-4.707-2.092-8.762-4.88-12.162-8.367-3.399-3.574-6.014-7.583-7.844-12.028-1.828-4.446-2.746-9.022-2.746-13.728 0-4.794.96-9.414 2.877-13.859a36.412 36.412 0 017.638-11.3l.47-.467c3.487-3.486 7.58-6.232 12.287-8.236 4.707-2.005 9.85-3.007 15.428-3.007M44.844.524l31.77 73.084H59.88L52.558 56.48H24.187l-7.321 17.127H0L31.9.523zm93.58 0L158.56 26.41 178.693.523h17.127l-28.894 37 27.979 36.084h-17.127l-19.22-24.84-19.087 24.84h-17.389l28.11-36.084-29.025-37zM266.106.188v48.905h12.689L259.56 64.877V4.744zm93.928 14.063c-4.794 0-8.893 1.133-12.292 3.399-3.313 2.266-5.84 5.142-7.583 8.629-1.744 3.486-2.615 7.104-2.615 10.852 0 3.922.918 7.67 2.748 11.243 1.828 3.487 4.399 6.32 7.711 8.498 3.4 2.18 7.452 3.269 12.159 3.269 4.794 0 8.847-1.133 12.159-3.4 3.315-2.353 5.84-5.273 7.583-8.76 1.743-3.573 2.617-7.233 2.617-10.981 0-3.922-.915-7.627-2.745-11.113-1.83-3.487-4.445-6.276-7.847-8.368-3.313-2.179-7.276-3.268-11.895-3.268M38.438 19.74L27.717 42.753h21.05z"
        />
      </svg>
    )
  },
  {
    stack_name: "React-Query",
    stack_link: "https://tanstack.com/query/latest/docs/framework/react/overview",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.12em"
        height="1em"
        viewBox="0 0 256 230"
        {...props}
      >
        <path
          fill="#00435b"
          d="M157.98 142.487l-4.91 8.527a8.288 8.288 0 01-7.182 4.151H108.27a8.288 8.288 0 01-7.182-4.151l-4.911-8.527zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506zm-17.5-22.066a8.288 8.288 0 017.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 017.182-4.151z"
        />
        <path
          fill="#002b3b"
          d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957 1.602-6.693 4.53-12.153 8.984-16.093 4.702-4.159 10.646-6.2 17.326-6.2 11.018 0 22.602 5.025 34.98 14.57 5.05 3.894 10.29 8.587 15.732 14.082.434-.557.923-1.083 1.469-1.57 15.386-13.71 28.34-22.23 39.42-25.514 6.588-1.954 12.773-2.14 18.405-.244 5.946 2 10.683 6.137 14.026 11.93 5.516 9.561 6.97 22.124 4.914 37.637-.838 6.323-2.271 13.21-4.296 20.673.764.092 1.53.262 2.288.513 19.521 6.47 33.345 13.426 41.714 21.377 4.98 4.73 8.231 9.996 9.407 15.826 1.24 6.153.03 12.324-3.308 18.113-5.506 9.548-15.63 17.077-30.052 23.041-5.79 2.395-12.343 4.564-19.664 6.515.334.754.594 1.555.767 2.395 4.167 20.206 5.061 35.704 2.368 46.957-1.602 6.693-4.531 12.153-8.985 16.093-4.701 4.159-10.646 6.2-17.325 6.2-11.019 0-22.602-5.025-34.98-14.57-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 01-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515-6.588 1.954-12.773 2.14-18.405.244-5.946-2-10.683-6.137-14.026-11.93-5.516-9.561-6.97-22.124-4.914-37.637.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 01-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377-4.98-4.73-8.231-9.996-9.407-15.826-1.24-6.153-.03-12.325 3.308-18.114 5.506-9.547 15.63-17.077 30.052-23.04 5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 01-.633-2.082"
        />
        <path
          fill="#ff4154"
          d="M189.647 161.333a3.684 3.684 0 014.235 2.81l.023.112.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 012.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076 11.467-.913 23.442-2.475 35.924-4.687M78.646 134.667l.062.105.646 1.127c5.177 9 10.57 17.542 16.18 25.627 6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 01-.309 5.082l-.093.083-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 016.579-.618m124.857-52.054l.112.037 1.028.354c33.705 11.725 46.51 24.61 38.416 38.655-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 01-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717 4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 014.432-2.295zM84.446 76.71a3.683 3.683 0 011.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 01-4.544 2.262l-.112-.037-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654 7.916-13.737 30.93-23.738 69.041-30.004.85-.14 1.722.022 2.464.459m108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 01-6.579.618l-.062-.105-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 01.309-5.082l.093-.083.83-.715c27.307-23.397 45.055-28.068 53.244-14.013M77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 01-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 01-4.234-2.81l-.024-.113-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59"
        />
        <path
          fill="#ffd94c"
          d="M111.295 73.67h31.576a12.89 12.89 0 0111.181 6.475l15.855 27.626a12.892 12.892 0 010 12.834l-15.855 27.626a12.892 12.892 0 01-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 010-12.834l15.854-27.626a12.892 12.892 0 0111.182-6.475m26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 010 12.822l-11.056 19.288a12.892 12.892 0 01-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 010-12.822l11.056-19.288a12.892 12.892 0 0111.184-6.48zm-5.187 9.12h-11.576a12.892 12.892 0 00-11.179 6.47l-5.842 10.167a12.892 12.892 0 000 12.846l5.842 10.168a12.892 12.892 0 0011.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 000-12.846l-5.842-10.168a12.892 12.892 0 00-11.179-6.47m-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 010 12.862l-.829 1.44a12.892 12.892 0 01-11.173 6.46h-1.588a12.892 12.892 0 01-11.173-6.46l-.829-1.44a12.892 12.892 0 010-12.862l.829-1.44a12.892 12.892 0 0111.173-6.46zm-.792 8.599a5.738 5.738 0 00-4.97 2.866 5.729 5.729 0 000 5.732 5.738 5.738 0 009.937 0 5.729 5.729 0 000-5.732 5.736 5.736 0 00-4.967-2.866m-46.509 5.732h10.32"
        />
      </svg>
    )
  },
  {
    stack_name: "Git",
    stack_link: "https://git-scm.com/doc",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...props}
      >
        <path
          fill="#de4c36"
          d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 015.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 016.421-4.281V94.196a19.378 19.378 0 01-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442 4.83 116.077c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
        />
      </svg>
    )
  },
  {
    stack_name: "NodeJS",
    stack_link: "https://nodejs.org/docs/latest/api/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
        {...props}
      >
        <path
          fill="url(#deviconNodejs0)"
          d="M66.958.825a6.07 6.07 0 00-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 006.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
        />
        <path
          fill="url(#deviconNodejs1)"
          d="M116.897 29.76L66.841.825A8 8 0 0065.302.23L9.21 96.798a6.3 6.3 0 001.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 00-1.302-1.072"
        />
        <path
          fill="url(#deviconNodejs2)"
          d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
        />
        <defs>
          <linearGradient
            id="deviconNodejs0"
            x1={34.513}
            x2={27.157}
            y1={15.535}
            y2={30.448}
            gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3f873f" />
            <stop offset={0.33} stopColor="#3f8b3d" />
            <stop offset={0.637} stopColor="#3e9638" />
            <stop offset={0.934} stopColor="#3da92e" />
            <stop offset={1} stopColor="#3dae2b" />
          </linearGradient>
          <linearGradient
            id="deviconNodejs1"
            x1={30.009}
            x2={50.533}
            y1={23.359}
            y2={8.288}
            gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.138} stopColor="#3f873f" />
            <stop offset={0.402} stopColor="#52a044" />
            <stop offset={0.713} stopColor="#64b749" />
            <stop offset={0.908} stopColor="#6abf4b" />
          </linearGradient>
          <linearGradient
            id="deviconNodejs2"
            x1={21.917}
            x2={40.555}
            y1={22.261}
            y2={22.261}
            gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.092} stopColor="#6abf4b" />
            <stop offset={0.287} stopColor="#64b749" />
            <stop offset={0.598} stopColor="#52a044" />
            <stop offset={0.862} stopColor="#3f873f" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    stack_name: "Supabase",
    stack_link: "https://supabase.com/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0.98em"
        height="1em"
        viewBox="0 0 256 263"
        {...props}
      >
        <defs>
          <linearGradient id="a" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%">
            <stop offset="0%" stopColor="#249361" />
            <stop offset="100%" stopColor="#3ecf8e" />
          </linearGradient>
          <linearGradient id="b" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%">
            <stop offset="0%" stopColor="#249361" />
            <stop offset="100%" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          fill="#3ecf8e"
          d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
        />
        <path
          fill="#3ecf8e"
          fillOpacity="0.2"
          d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
        />
        <path
          fill="#3ecf8e"
          d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
        />
      </svg>
    )
  },
  {
    stack_name: "Vercel",
    stack_link: "https://vercel.com/",
    stack_icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4.42em"
        height="1em"
        viewBox="0 0 512 116"
        {...props}
      >
        <path d="M255.42 28.976c-19.993 0-34.408 13.039-34.408 32.597 0 19.559 16.226 32.598 36.22 32.598 12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.218 6.338-15.466 6.338-8.674 0-16.045-4.527-18.78-11.771h50.744c.399-2.029.634-4.13.634-6.339 0-19.54-14.415-32.58-34.409-32.58m-17.13 26.26c2.263-7.226 8.457-11.772 17.113-11.772 8.675 0 14.869 4.546 17.114 11.772zm212.138-26.26c-19.993 0-34.409 13.04-34.409 32.598 0 19.559 16.226 32.598 36.22 32.598 12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.217 6.338-15.465 6.338-8.675 0-16.046-4.527-18.78-11.771H484.2c.399-2.029.634-4.13.634-6.339 0-19.54-14.415-32.58-34.408-32.58m-17.114 26.26c2.264-7.226 8.457-11.772 17.114-11.772 8.674 0 14.868 4.546 17.113 11.772zm-70.683 6.338c0 10.866 7.1 18.11 18.11 18.11 7.461 0 13.057-3.386 15.937-8.91l13.908 8.023c-5.759 9.598-16.552 15.375-29.845 15.375-20.011 0-34.408-13.04-34.408-32.598s14.415-32.597 34.408-32.597c13.293 0 24.068 5.777 29.845 15.375l-13.908 8.023c-2.88-5.524-8.476-8.91-15.937-8.91-10.992 0-18.11 7.243-18.11 18.11M512 9.055V92.36h-16.299V9.055zM66.916 0l66.915 115.903H0zm167.298 9.055l-50.182 86.927-50.183-86.927h18.817l31.366 54.33 31.366-54.33zm106.685 21.732v17.548c-1.811-.525-3.73-.887-5.795-.887-10.522 0-18.11 7.244-18.11 18.11V92.36h-16.299V30.787h16.299v16.66c0-9.2 10.703-16.66 23.905-16.66" />
      </svg>
    )
  }
];